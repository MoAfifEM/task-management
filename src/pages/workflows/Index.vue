<template>
  <div class="container py-4">
    <h1 class="mb-4">Workflows Management</h1>

    <!-- Add Workflow Button -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <button class="btn btn-primary" @click="openCreateModal">Create</button>
    </div>

    <!-- Scrollable Workflow List -->
    <div class="row g-3" style="max-height: 400px; overflow-y: auto">
      <div class="col-12 col-md-6 col-lg-4" v-for="workflow in workflows" :key="workflow.id">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ workflow.name }}</h5>
            <p class="card-text text-muted">Step: {{ workflow.step }}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-sm btn-outline-secondary" @click="openEditModal(workflow)">
                Edit
              </button>
              <button class="btn btn-sm btn-outline-danger" @click="deleteWorkflow(workflow.id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Shared Workflow Modal (Create/Edit) -->
    <WorkflowModal
      v-if="showModal"
      :initialData="selectedWorkflow"
      @save="handleSave"
      @close="showModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WorkflowModal from '../../components/workflow/WorkflowModal.vue'
import { workflows as data } from '../../data/mockData'
import type { Workflow } from '../../types/models'

const workflows = ref<Workflow[]>(data)
const showModal = ref(false)
const selectedWorkflow = ref<Workflow | null>(null)

// Open create modal
function openCreateModal() {
  selectedWorkflow.value = null
  showModal.value = true
}

// Open edit modal
function openEditModal(workflow: Workflow) {
  selectedWorkflow.value = { ...workflow }
  showModal.value = true
}

// Handle saving the workflow (create/edit)
function handleSave(updated: Workflow) {
  if (updated.id) {
    // Edit existing workflow
    const index = workflows.value.findIndex((w) => w.id === updated.id)
    if (index !== -1) workflows.value[index] = updated
  } else {
    // Create new workflow
    const newId = Date.now().toString()
    workflows.value.push({ ...updated, id: newId })
  }
  showModal.value = false
}

// Delete a workflow
function deleteWorkflow(workflowId: string) {
  workflows.value = workflows.value.filter((workflow) => workflow.id !== workflowId)
}
</script>
