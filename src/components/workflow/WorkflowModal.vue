<template>
  <div class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0, 0, 0, 0.5)">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="submitForm">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditMode ? 'Edit Workflow' : 'Create Workflow' }}</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="workflowName" class="form-label">Workflow Name</label>
              <input
                id="workflowName"
                v-model="form.name"
                type="text"
                class="form-control"
                placeholder="Enter workflow name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="workflowDescription" class="form-label">Description</label>
              <textarea
                id="workflowDescription"
                v-model="form.description"
                class="form-control"
                placeholder="Enter workflow description"
              ></textarea>
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
import type { Workflow } from '../../types/models'
import type { Department } from '@/types/enums'
import { tasks as tasksDropdown } from '../../data/mockData'

const props = defineProps<{
  initialData: Workflow | null
}>()

const emit = defineEmits<{
  (e: 'save', data: Workflow): void
  (e: 'close'): void
}>()

const form = reactive<Workflow>({
  id: `workflow-${Date.now()}`,
  name: '',
  description: '',
  tasks: [],
})

const isEditMode = computed(() => !!props.initialData?.id)

watch(
  () => props.initialData,
  (data) => {
    if (data) {
      form.name = data.name
      form.description = data.description || ''
      form.tasks = data.tasks
    } else {
      form.name = ''
      form.description = ''
      form.tasks = []
    }
  },
  { immediate: true },
)

function submitForm() {
  const result: Workflow = {
    ...form,
    id: props.initialData?.id || form.id,
  }
  emit('save', result)
}
</script>
