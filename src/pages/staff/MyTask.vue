<template>
  <div class="tasks-index container py-4">
    <h1 class="mb-3">Pending Tasks</h1>

    <!-- Scrollable Tasks List -->
    <div class="row g-3" style="max-height: 500px; overflow-y: auto">
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
// Add list of the journeys that are in progress
const inProgressJourneys = computed(() =>
  _journeys.value.filter((journey: Journey) => journey.status === 'IN_PROGRESS'),
)

// select journey by id
function selectJourneyById(id: string) {
  const selectedJourney = _journeys.value.find((t: Journey) => t.id === id)

  if (!selectedJourney) {
    alert('Task not found.')
    return
  }

  return selectedJourney
}

// select workflow by id
function selectWorkflowById(id: string) {
  const selectedWorkflow = workflows.find((t: Workflow) => t.id === id)

  if (!selectedWorkflow) {
    alert('Workflow not found.')
    return
  }

  return selectedWorkflow
}

// Function to get the next task after a given task ID
function getNextTask(taskId: string, workflow: Workflow) {
  // Find the index of the current task
  const currentIndex = workflow.tasks.findIndex((task) => task.id === taskId)

  // Check if there is a task at the next index and return it
  if (currentIndex !== -1 && currentIndex < workflow.tasks.length - 1) {
    return workflow.tasks[currentIndex + 1]
  }

  // Return null if there is no next task
  return null
}

// generate new task from workflow. if has another task, create new task. if dont have create new task with status done
function generateNewTask(journeyId: string) {
  const selectedJourney = selectJourneyById(journeyId)
  const selectedWorkflow = selectWorkflowById(selectedJourney!.workflowId)

  console.log('Selected Journey:', selectedJourney)
  console.log('Selected Workflow:', selectedWorkflow)

  // Find task.id in the tasks workflow
  const t = getNextTask(selectedJourney!.task.id, selectedWorkflow!)

  console.log('Next Task:', t)

  if (selectedJourney?.status === TaskStatus.IN_PROGRESS) {
    return
  }

  if (t) {
    const newJourney: Journey = {
      id: `journey-${Date.now()}-${t.id}`, // Unique ID for the journey
      patientId: selectedJourney!.patientId,
      workflowId: selectedJourney!.workflowId,
      status: TaskStatus.PENDING,
      task: t, // Assign the next task
      staffId: selectedJourney!.staffId, // Assign a randomly selected staff
      createdAt: new Date().toISOString(),
    }

    _journeys.value.push(newJourney) // Add the new journey to the journeys array
    alert(`Added next task "${t.title}" for patient "${selectedJourney!.patientId}"`)
  } else {
    alert('No more tasks available in this workflow.')
  }
}

// Mark task as "In Progress"
function markInProgress(journeyId: string) {
  const selectedJourney = selectJourneyById(journeyId)

  if (selectedJourney) {
    selectedJourney.status = TaskStatus.IN_PROGRESS
    selectedJourney.completedAt = new Date().toISOString()
  }

  // Generate a new task from the workflow
  generateNewTask(journeyId)

  // Show a success message
  alert(`Task "${selectedJourney!.task.title}" marked as In Progress.`)
}

// Mark task as "Done"
function markDone(journeyId: string) {
  const selectedJourney = selectJourneyById(journeyId)

  if (selectedJourney) {
    selectedJourney.status = TaskStatus.DONE
    selectedJourney.completedAt = new Date().toISOString()
  }

  // Generate a new task from the workflow
  generateNewTask(journeyId)

  // Show a success message
  alert(`Task "${selectedJourney!.task.title}" marked as Done.`)
}
</script>
