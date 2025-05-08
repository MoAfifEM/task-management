<template>
  <div class="tasks-index container py-4">
    <h1 class="mb-4">Tasks Management</h1>

    <!-- Add Task Button -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <button class="btn btn-primary" @click="openCreateModal">Create</button>
    </div>

    <!-- Scrollable Tasks List -->
    <div class="row g-3" style="max-height: 400px; overflow-y: auto">
      <div class="col-12 col-md-6 col-lg-4" v-for="task in data" :key="task.id">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
            <p class="card-text text-muted">Task ID: {{ task.id }}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-sm btn-outline-secondary" @click="openEditModal(task)">
                Edit
              </button>
              <button class="btn btn-sm btn-outline-danger" @click="deleteTask(task.id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Shared Task Modal (Create/Edit) -->
    <TaskModal
      v-if="showModal"
      :initialData="selectedTask"
      @save="handleSave"
      @close="showModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskModal from '../../components/task/TaskModal.vue'
import { tasks } from '../../data/mockData'
import type { Task } from '../../types/models'
import { TaskStatus } from '../../types/enums'

const data = ref<Task[]>(tasks)
const showModal = ref(false)
const selectedTask = ref<Task | null>(null)

// Open create modal
function openCreateModal() {
  selectedTask.value = null
  showModal.value = true
}

// Open edit modal
function openEditModal(task: Task) {
  selectedTask.value = { ...task }
  showModal.value = true
}

// Handle saving the task (create/edit)
function handleSave(updated: Task) {
  if (updated.id) {
    // Edit existing task
    const index = data.value.findIndex((t) => t.id === updated.id)
    if (index !== -1) data.value[index] = updated
  } else {
    // Create new task
    const newId = Date.now().toString()
    data.value.push({ ...updated, id: newId })
  }
  showModal.value = false
}

// Delete a task
function deleteTask(taskId: string) {
  data.value = data.value.filter((task) => task.id !== taskId)
}
</script>
