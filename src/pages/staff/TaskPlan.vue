<template>
  <div class="task-plan container-fluid py-4">
    <h1 class="mb-4">Task Plan</h1>

    <!-- Scrollable Workflows Container -->
    <div class="workflows-container overflow-auto" style="max-height: 70vh">
      <div class="workflows d-flex flex-column gap-4">
        <div
          class="workflow-card p-3 border rounded shadow-sm"
          v-for="workflow in workflows"
          :key="workflow.id"
        >
          <h5 class="workflow-title mb-3">{{ workflow.name }}</h5>
          <p class="text-muted">{{ workflow.description }}</p>

          <!-- Horizontal Scrollable Tasks -->
          <div class="tasks-chain d-flex overflow-auto" style="white-space: nowrap">
            <div
              class="task-card me-3 p-3 border rounded shadow-sm"
              v-for="task in workflow.tasks"
              :key="task.id"
              style="min-width: 200px; display: inline-block"
            >
              <h6 class="task-title mb-2">{{ task.title }}</h6>
              <p class="text-muted mb-1">Task ID: {{ task.id }}</p>
              <span class="badge bg-primary">{{ task.department }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { workflows } from '../../data/mockData'
</script>

<style scoped>
.workflow-card {
  background-color: #fff;
}

.tasks-chain {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.task-card {
  background-color: #f8f9fa;
  flex-shrink: 0;
}

.workflows-container {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>
