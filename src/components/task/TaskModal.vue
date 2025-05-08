<template>
  <div class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0, 0, 0, 0.5)">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="submitForm">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditMode ? 'Edit Task' : 'Create Task' }}</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Task Title</label>
              <input v-model="form.title" type="text" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea v-model="form.description" class="form-control" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label">Status</label>
              <select v-model="form.status" class="form-control">
                <option :value="status.PENDING">Pending</option>
                <option :value="status.IN_PROGRESS">In Progress</option>
                <option :value="status.DONE">Done</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancel</button>
            <button type="submit" class="btn btn-primary">
              {{ isEditMode ? 'Update' : 'Create' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, watch } from 'vue'
import { TaskStatus } from '../../types/enums'

interface Task {
  id?: string
  title: string
  description: string
  status: TaskStatus
}

const props = defineProps<{
  initialData: Task | null
}>()

const emit = defineEmits<{
  (e: 'save', data: Task): void
  (e: 'close'): void
}>()

const form = reactive<Task>({
  title: '',
  description: '',
  status: TaskStatus.PENDING,
})

const status = TaskStatus

const isEditMode = computed(() => !!props.initialData?.id)

watch(
  () => props.initialData,
  (data) => {
    if (data) {
      form.title = data.title
      form.description = data.description
      form.status = data.status
    } else {
      form.title = ''
      form.description = ''
      form.status = TaskStatus.PENDING
    }
  },
  { immediate: true },
)

function submitForm() {
  const result: Task = {
    ...form,
    id: props.initialData?.id,
  }
  emit('save', result)
}
</script>
