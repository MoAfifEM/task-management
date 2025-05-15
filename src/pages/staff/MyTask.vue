<template>
  <div class="tasks-index container-fluid py-4">
    <h1 class="mb-4">Task Management</h1>

    <!-- Scrollable Content Wrapper -->
    <div class="tasks-content-wrapper" style="max-height: 80vh; overflow-y: auto">
      <!-- Pending Tasks (Scrollable Y-Axis) -->
      <h2 class="mb-3">Pending Tasks</h2>
      <div class="pending-tasks-container overflow-auto mb-4" style="max-height: 50vh">
        <div class="row g-3">
          <div class="col-12 col-md-6 col-lg-4" v-for="task in pendingJourneys" :key="task.id">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">{{ task.task.title }}</h5>
                <p class="card-text text-muted">Patient Name: {{ task.patientId }}</p>
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

      <!-- In Progress Tasks (Horizontal Scrollable) -->
      <div class="in-progress-tasks-container mb-4">
        <h2 class="mb-3">In Progress Tasks</h2>
        <div class="tasks-chain d-flex overflow-auto" style="white-space: nowrap">
          <div
            class="task-card me-3 p-3 border rounded shadow-sm d-flex flex-column justify-content-between"
            v-for="task in inProgressJourneys"
            :key="task.id"
            style="min-width: 200px; display: inline-block"
          >
            <div>
              <h6 class="task-title mb-2">{{ task.task.title }}</h6>
              <p class="text-muted mb-1">Patient Name: {{ task.patientId }}</p>
              <span class="badge bg-warning mb-2">In Progress</span>
            </div>
            <button class="btn btn-sm btn-outline-success mt-2 w-100" @click="markDone(task.id)">
              Done
            </button>
          </div>
        </div>
      </div>

      <!-- Done Tasks (Horizontal Scrollable) -->
      <div class="done-tasks-container">
        <h2 class="mb-3">Done Tasks</h2>
        <div class="tasks-chain d-flex overflow-auto" style="white-space: nowrap">
          <div
            class="task-card me-3 p-3 border rounded shadow-sm"
            v-for="task in doneJourneys"
            :key="task.id"
            style="min-width: 200px; display: inline-block"
          >
            <h6 class="task-title mb-2">{{ task.task.title }}</h6>
            <p class="text-muted mb-1">Patient Name: {{ task.patientId }}</p>
            <span class="badge bg-success">Done</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { journeys, workflows } from '../../data/mockData'
import type { Journey, Workflow } from '../../types/models'
import { TaskStatus } from '@/types/enums'

const _journeys = ref<Journey[]>(journeys)

const pendingJourneys = computed(() =>
  _journeys.value.filter((journey: Journey) => journey.status === 'PENDING'),
)

const inProgressJourneys = computed(() =>
  _journeys.value.filter((journey: Journey) => journey.status === 'IN_PROGRESS'),
)

const doneJourneys = computed(() =>
  _journeys.value.filter((journey: Journey) => journey.status === 'DONE'),
)

function selectJourneyById(id: string) {
  const selectedJourney = _journeys.value.find((t: Journey) => t.id === id)
  if (!selectedJourney) {
    alert('Task not found.')
    return
  }
  return selectedJourney
}

function selectWorkflowById(id: string) {
  const selectedWorkflow = workflows.find((t: Workflow) => t.id === id)
  if (!selectedWorkflow) {
    alert('Workflow not found.')
    return
  }
  return selectedWorkflow
}

function getNextTask(taskId: string, workflow: Workflow) {
  const currentIndex = workflow.tasks.findIndex((task) => task.id === taskId)
  if (currentIndex !== -1 && currentIndex < workflow.tasks.length - 1) {
    return workflow.tasks[currentIndex + 1]
  }
  return null
}

function generateNewTask(journeyId: string) {
  const selectedJourney = selectJourneyById(journeyId)
  const selectedWorkflow = selectWorkflowById(selectedJourney!.workflowId)

  const t = getNextTask(selectedJourney!.task.id, selectedWorkflow!)

  if (selectedJourney?.status === TaskStatus.IN_PROGRESS) {
    return
  }

  if (t) {
    const newJourney: Journey = {
      id: `journey-${Date.now()}-${t.id}`,
      patientId: selectedJourney!.patientId,
      workflowId: selectedJourney!.workflowId,
      status: TaskStatus.PENDING,
      task: t,
      staffId: selectedJourney!.staffId,
      createdAt: new Date().toISOString(),
    }

    _journeys.value.push(newJourney)
    alert(`Added next task "${t.title}" for patient "${selectedJourney!.patientId}"`)
  } else {
    alert('No more tasks available in this workflow.')
  }
}

function markInProgress(journeyId: string) {
  const selectedJourney = selectJourneyById(journeyId)
  if (selectedJourney) {
    selectedJourney.status = TaskStatus.IN_PROGRESS
    selectedJourney.completedAt = new Date().toISOString()
  }
  generateNewTask(journeyId)
  alert(`Task "${selectedJourney!.task.title}" marked as In Progress.`)
}

function markDone(journeyId: string) {
  const selectedJourney = selectJourneyById(journeyId)
  if (selectedJourney) {
    selectedJourney.status = TaskStatus.DONE
    selectedJourney.completedAt = new Date().toISOString()
  }
  generateNewTask(journeyId)
  alert(`Task "${selectedJourney!.task.title}" marked as Done.`)
}
</script>

<style scoped>
.tasks-content-wrapper {
  /* border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f9f9f9; */
  overflow-y: auto; /* Enables vertical scrolling */
}
.pending-tasks-container {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.tasks-chain {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.task-card {
  background-color: #f8f9fa;
  flex-shrink: 0;
}
</style>
