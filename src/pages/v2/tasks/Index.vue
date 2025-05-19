<template>
  <PageContainer title="Tasks">
    <div class="tab-buttons mt-3 mb-3">
      <button
        class="btn"
        :class="tab === 'pending' ? 'btn-primary' : 'btn-outline-primary'"
        @click="tab = 'pending'"
      >
        Pending
      </button>
      <button
        class="btn ms-2"
        :class="tab === 'inprogress' ? 'btn-primary' : 'btn-outline-primary'"
        @click="tab = 'inprogress'"
      >
        In Progress
      </button>
      <button
        class="btn ms-2"
        :class="tab === 'done' ? 'btn-primary' : 'btn-outline-primary'"
        @click="tab = 'done'"
      >
        Done
      </button>
    </div>

    <div class="section-list-scroll">
      <div
        v-for="journey in filteredJourneys"
        :key="journey.id"
        class="card task-card border-bottom mb-2"
      >
        <div class="card-body d-flex align-items-center">
          <div class="flex-grow-1">
            <div class="d-flex align-items-center mb-1">
              <span class="badge status-badge me-2" :class="statusClass(journey.status)">
                {{ journey.status }}
              </span>
              <span class="fw-bold">
                {{ getPatient(journey.patientId)?.fullName || 'Unknown Patient' }}
              </span>
            </div>
            <div class="text-secondary mb-1">
              <i :class="getDepartmentIcon(journey.task.department) + ' me-2'"></i>
              {{ journey.task.department }}
            </div>
            <div>
              <span class="fw-bold">Task:</span>
              <span>{{ journey.task.title }}</span>
            </div>
            <!-- Action Buttons -->
            <div class="mt-3">
              <template v-if="journey.status === TaskStatus.PENDING">
                <button class="btn btn-sm btn-info me-2" @click="markInProgress(journey.id)">
                  In Progress
                </button>
                <!-- <button class="btn btn-sm btn-success" @click="markDone(journey.id)">Done</button> -->
              </template>
              <template v-else-if="journey.status === TaskStatus.IN_PROGRESS">
                <button class="btn btn-sm btn-success" @click="markDone(journey.id)">Done</button>
              </template>
              <!-- No buttons for DONE or COMPLETED -->
            </div>
          </div>
        </div>
      </div>
      <div v-if="filteredJourneys.length === 0" class="text-center text-muted mt-5">
        No tasks found for this status.
      </div>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
import type { Journey, Patient, Workflow } from '@/types/models'
import { patients, journeys, workflows } from '@/data/mockData'
import { computed, ref } from 'vue'
import PageContainer from '@/components/v2/PageContainer.vue'
import { TaskStatus } from '@/types/enums'
import { useAuthStore } from '@/stores/authStore'

const tab = ref<'pending' | 'inprogress' | 'done'>('pending')
// Function to handle task selection
const _journeys = ref<Journey[]>(journeys)

const filteredJourneys = computed(() => {
  if (tab.value === 'pending') {
    return _journeys.value.filter((j) => j.status === TaskStatus.PENDING)
  }
  if (tab.value === 'inprogress') {
    return _journeys.value.filter((j) => j.status === TaskStatus.IN_PROGRESS)
  }
  // done tab
  return _journeys.value.filter(
    (j) => j.status === TaskStatus.DONE || j.status === TaskStatus.COMPLETED,
  )
})

function getPatient(patientId: string): Patient | undefined {
  return patients.find((p) => p.id === patientId)
}

// FontAwesome icon mapping (adjust as needed)
function getDepartmentIcon(department: string) {
  switch (department) {
    case 'NURSING':
      return 'pi pi-user-plus'
    case 'PHYSIOTHERAPY':
      return 'pi pi-heart'
    case 'RADIOLOGY':
      return 'pi pi-camera'
    case 'CARDIOLOGY':
      return 'pi pi-heart-fill'
    case 'DERMATOLOGY':
      return 'pi pi-star'
    case 'GYNECOLOGY':
      return 'pi pi-users'
    case 'NEUROLOGY':
      return 'pi pi-bolt'
    case 'ORTHOPEDICS':
      return 'pi pi-inbox'
    case 'PEDIATRICS':
      return 'pi pi-user'
    case 'ADMINISTRATION':
      return 'pi pi-briefcase'
    default:
      return 'pi pi-building'
  }
}

function statusClass(status: string) {
  if (status === TaskStatus.PENDING) return 'bg-warning text-dark'
  if (status === TaskStatus.IN_PROGRESS) return 'bg-info text-white'
  if (status === TaskStatus.DONE || status === TaskStatus.COMPLETED) return 'bg-success text-white'
  return 'bg-secondary text-white'
}

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

    // Notify only if assigned to current user
    const currentUser = useAuthStore().user
    if (currentUser && newJourney.staffId === currentUser.id) {
      const patient = getPatient(newJourney.patientId)
      window.dispatchEvent(
        new CustomEvent('global-notification', {
          detail: `A new task "${newJourney.task.title}" has been assigned to you for patient "${patient?.fullName || newJourney.patientId}".`,
        }),
      )
    }
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
.tab-buttons {
  display: flex;
  justify-content: flex-start;
  padding: 0 15px;
}
.tab-buttons .btn {
  flex: 1;
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-top: none;
}
.tab-buttons .btn-primary {
  background-color: #0056b3;
  color: #fff;
}
.tab-buttons .btn-outline-primary {
  background-color: #fff;
  color: #007bff;
  border-color: #0056b3;
}
.tab-buttons .btn-primary:hover,
.tab-buttons .btn-outline-primary:hover {
  background-color: #0056b3;
  color: #fff;
}
.section-list-scroll {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 5px 15px 30px 15px;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.task-card {
  border-radius: 0.5rem;
  background: #fff;
}

.status-badge {
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5em 1.2em;
  border-radius: 0.5em;
  letter-spacing: 0.03em;
}
</style>
