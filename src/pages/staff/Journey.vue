<template>
  <div class="journey container-fluid py-4">
    <h1 class="mb-4">Journey</h1>

    <!-- Scrollable Journeys Container -->
    <div class="journeys-container overflow-auto" style="max-height: 70vh">
      <div class="journeys d-flex flex-column gap-4">
        <!-- Group by Patient -->
        <div
          class="journey-card p-3 border rounded shadow-sm"
          v-for="(journeyGroup, index) in groupedJourneys"
          :key="index"
        >
          <h5 class="journey-title mb-3">
            {{ journeyGroup.patientName }} - {{ journeyGroup.workflowTitle }}
          </h5>

          <!-- Horizontal Scrollable Tasks -->
          <div class="tasks-chain d-flex overflow-auto" style="white-space: nowrap">
            <div
              class="task-card me-3 p-3 border rounded shadow-sm"
              v-for="task in journeyGroup.tasks"
              :key="task.id"
              :class="{ 'task-done': task.status === 'DONE' }"
              style="min-width: 250px; display: inline-block"
            >
              <h6 class="task-title mb-2">{{ task.title }}</h6>
              <p class="text-muted mb-1">Task ID: {{ task.id }}</p>
              <p class="text-muted mb-1">Handled By: {{ task.staffName }}</p>
              <span
                class="badge"
                :class="{
                  'bg-success': task.status === 'DONE',
                  'bg-warning': task.status === 'PENDING',
                  'bg-secondary': task.status === 'IN_PROGRESS',
                }"
              >
                {{ task.status }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { journeys, patients, workflows, staffs } from '../../data/mockData'

// Group journeys by patient and workflow
const groupedJourneys = journeys.reduce((acc, journey) => {
  const patient = patients.find((p) => p.id === journey.patientId)
  const workflow = workflows.find((w) => w.id === journey.workflowId)
  const staff = staffs.find((s) => s.id === journey.staffId)

  if (patient && workflow) {
    const groupKey = `${patient.id}-${workflow.id}`
    if (!acc[groupKey]) {
      acc[groupKey] = {
        patientName: patient.fullName,
        workflowTitle: workflow.name,
        tasks: [],
      }
    }
    acc[groupKey].tasks.push({
      id: journey.task.id,
      title: journey.task.title,
      staffName: staff ? staff.name : 'Unassigned',
      status: journey.status,
    })
  }
  return acc
}, {})

// Convert grouped object to array for rendering
const groupedJourneysArray = Object.values(groupedJourneys)
</script>

<style scoped>
.journey-card {
  background-color: #fff;
}

.tasks-chain {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.task-card {
  background-color: #f8f9fa;
  flex-shrink: 0;
  transition: background-color 0.3s ease;
}

.task-card.task-done {
  background-color: #d4edda; /* Light green for DONE tasks */
  border-color: #c3e6cb; /* Slightly darker green border */
}

.journeys-container {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>
