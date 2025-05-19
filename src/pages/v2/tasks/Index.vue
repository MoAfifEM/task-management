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
              <span class="fw-bold">{{
                getPatient(journey.patientId)?.fullName || 'Unknown Patient'
              }}</span>
            </div>
            <div class="text-secondary mb-1">
              <i :class="getDepartmentIcon(journey.task.department)" class="me-1"></i>
              {{ journey.task.department }}
            </div>
            <div>
              <span class="fw-bold">Task:</span>
              <span>{{ journey.task.title }}</span>
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
import type { Journey, Patient } from '@/types/models'
import { patients, journeys } from '@/data/mockData'
import { computed, ref } from 'vue'
import PageContainer from '@/components/v2/PageContainer.vue'
import { TaskStatus } from '@/types/enums'

const tab = ref<'pending' | 'inprogress' | 'done'>('pending')

const filteredJourneys = computed(() => {
  if (tab.value === 'pending') {
    return journeys.filter((j) => j.status === TaskStatus.PENDING)
  }
  if (tab.value === 'inprogress') {
    return journeys.filter((j) => j.status === TaskStatus.IN_PROGRESS)
  }
  // done tab
  return journeys.filter((j) => j.status === TaskStatus.DONE || j.status === TaskStatus.COMPLETED)
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
