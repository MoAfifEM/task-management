<template>
  <div class="tasks-index container py-4">
    <h1 class="mb-5">My Tasks</h1>

    <!-- Scrollable Tasks List -->
    <div class="row g-3" style="max-height: 500px; overflow-y: auto">
      <div class="col-12 col-md-6 col-lg-4" v-for="task in data" :key="task.id">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
            <p class="card-text text-muted">Task ID: {{ task.id }}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-sm btn-outline-primary" @click="markInProgress(task.id)">
                In Progress
              </button>
              <button class="btn btn-sm btn-outline-success" @click="markDone(task.id)">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { tasks } from '../../data/mockData'
import type { Task } from '../../types/models'

const data = ref<Task[]>(tasks)

// Mark task as "In Progress"
function markInProgress(taskId: string) {
  const task = data.value.find((t) => t.id === taskId)
  if (task) {
    task.status = 'In Progress'
    alert(`Task "${task.title}" marked as In Progress.`)
  }
}

// Mark task as "Done"
function markDone(taskId: string) {
  const task = data.value.find((t) => t.id === taskId)
  if (task) {
    task.status = 'Done'
    alert(`Task "${task.title}" marked as Done.`)
  }
}
</script>
