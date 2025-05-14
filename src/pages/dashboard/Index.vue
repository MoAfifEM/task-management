<template>
  <div class="container-fluid">
    <div class="row g-3">
      <!-- Welcome message -->
      <div class="col-12">
        <div class="alert alert-primary" role="alert">
          <h4 class="alert-heading">Welcome, Nurse!</h4>
          <p>Here's a quick overview of today's tasks.</p>
        </div>
      </div>

      <!-- Stats cards -->
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card text-bg-light shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Total Patients</h5>
            <p class="card-text display-6">23</p>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <div class="card text-bg-light shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Pending Tasks</h5>
            <p class="card-text display-6">8</p>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <div class="card text-bg-light shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Staff On Duty</h5>
            <p class="card-text display-6">5</p>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <div class="card text-bg-light shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Appointments Today</h5>
            <p class="card-text display-6">12</p>
          </div>
        </div>
      </div>

      <!-- Recent activity -->
      <div class="col-12 mt-3">
        <div class="card shadow-sm">
          <div class="card-header">
            <strong>Recent Activity</strong>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Checked vitals for Patient #1021</li>
            <li class="list-group-item">Medication administered to Patient #1003</li>
            <li class="list-group-item">New patient registered: Mr. Tan</li>
          </ul>
        </div>
      </div>

      <!-- Patient Journey Section -->
      <div class="col-12 mt-3">
        <div class="card shadow-sm">
          <div class="card-header">
            <strong>Patient Journeys</strong>
          </div>
          <div class="card-body">
            <div class="list-group">
              <div class="list-group-item" v-for="patient in groupedPatients" :key="patient.id">
                <!-- Patient Header (Collapsible) -->
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">{{ patient.name }}</h5>
                  <button
                    class="btn btn-sm btn-outline-primary"
                    @click="toggleCollapse(patient.id)"
                    aria-label="Toggle Collapse"
                  >
                    {{ patient.isCollapsed ? 'Expand' : 'Collapse' }}
                  </button>
                </div>

                <!-- Patient Journey (Scrollable Tasks) -->
                <div v-if="!patient.isCollapsed" class="mt-3">
                  <div
                    class="journey-tasks-container"
                    style="overflow-x: auto; -webkit-overflow-scrolling: touch; max-width: 100%"
                  >
                    <div
                      class="task-card"
                      v-for="(task, index) in patient.tasks"
                      :key="index"
                      :class="['task-card', task.status]"
                    >
                      <div class="task-title">{{ task.title }}</div>
                      <div class="task-status">{{ task.status }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Task {
  title: string
  status: string
}

interface Patient {
  id: string
  name: string
  tasks: Task[]
  isCollapsed: boolean
}

// Sample Data
const patients = ref<Patient[]>([
  {
    id: '1',
    name: 'Alice Tan',
    tasks: [
      { title: 'Task 1', status: 'Completed' },
      { title: 'Task 2', status: 'In Progress' },
      { title: 'Task 3', status: 'Pending' },
    ],
    isCollapsed: false,
  },
  {
    id: '2',
    name: 'Mohd Amir',
    tasks: [
      { title: 'Task 1', status: 'In Progress' },
      { title: 'Task 2', status: 'Pending' },
    ],
    isCollapsed: false,
  },
  {
    id: '3',
    name: 'Siti Nur',
    tasks: [
      { title: 'Task 1', status: 'Pending' },
      { title: 'Task 2', status: 'Completed' },
    ],
    isCollapsed: false,
  },
])

// Toggle collapse state of the patient card
function toggleCollapse(patientId: string) {
  const patient = patients.value.find((p) => p.id === patientId)
  if (patient) {
    patient.isCollapsed = !patient.isCollapsed
  }
}

// Group patients (in case there's an advanced way of grouping)
const groupedPatients = computed(() => {
  return patients.value
})
</script>

<style scoped>
.journey-tasks-container {
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
  flex-wrap: nowrap; /* Prevent wrapping of task cards */
  max-width: 100%; /* Ensure the container doesn't exceed screen width */
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.task-card {
  min-width: 120px;
  max-width: 150px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  background-color: #f9f9f9;
  flex-shrink: 0; /* Prevent cards from shrinking */
}

.task-card.Completed {
  background-color: #d4edda;
}

.task-card.InProgress {
  background-color: #fff3cd;
}

.task-card.Pending {
  background-color: #f8d7da;
}

.task-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.task-status {
  font-size: 0.85rem;
  color: #6c757d;
}

.list-group-item {
  padding: 1rem;
  border: none;
  border-radius: 8px;
  margin-bottom: 1rem;
}

@media (max-width: 576px) {
  .journey-tasks-container {
    padding-bottom: 0.5rem;
  }

  .task-card {
    min-width: 100px;
    max-width: 120px;
    padding: 0.75rem;
  }

  .btn-outline-primary {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }

  .list-group-item {
    padding: 0.75rem;
  }
}

@media (max-width: 768px) {
  .task-card {
    min-width: 130px;
    max-width: 160px;
    padding: 0.75rem;
  }
}
</style>
