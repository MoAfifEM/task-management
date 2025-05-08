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
              <label class="form-label">Workflow Name</label>
              <input v-model="form.name" type="text" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Step</label>
              <input v-model="form.step" type="text" class="form-control" required />
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

interface Workflow {
  id?: string
  name: string
  step: string
}

const props = defineProps<{
  initialData: Workflow | null
}>()

const emit = defineEmits<{
  (e: 'save', data: Workflow): void
  (e: 'close'): void
}>()

const form = reactive<Workflow>({
  name: '',
  step: '',
})

const isEditMode = computed(() => !!props.initialData?.id)

watch(
  () => props.initialData,
  (data) => {
    if (data) {
      form.name = data.name
      form.step = data.step
    } else {
      form.name = ''
      form.step = ''
    }
  },
  { immediate: true },
)

function submitForm() {
  const result: Workflow = {
    ...form,
    id: props.initialData?.id,
  }
  emit('save', result)
}
</script>
