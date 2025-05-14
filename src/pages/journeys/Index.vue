<template>
  <div class="container py-4">
    <h1 class="mb-4 text-center">Journey</h1>

    <!-- List of Patients with Tasks -->
    <div class="list-group">
      <div class="list-group-item" v-for="patient in groupedJourneys" :key="patient.id">
        <!-- Patient Header -->
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="mb-0">{{ patient.fullName }}</h5>
          <button class="btn btn-sm btn-outline-primary" @click="toggleExpand(patient.id)">
            {{ patient.isExpanded ? 'Collapse' : 'Expand' }}
          </button>
        </div>

        <!-- List of Tasks (Expandable) -->
        <div v-if="patient.isExpanded" class="mt-3">
          <div class="row">
            <!-- Columns for Task Progress -->
            <div class="col-md-12">
              <h6>Tasks</h6>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Assigned Staff</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="journey in patient.journeys" :key="journey.id">
                    <td>{{ journey.task.title }}</td>
                    <td>{{ journey.staff.name }}</td>
                    <td>
                      <select
                        class="form-select"
                        v-model="journey.status"
                        @change="updateTaskStatus(journey, patient.id)"
                      >
                        <option :value="TaskStatus.PENDING">Pending</option>
                        <option :value="TaskStatus.IN_PROGRESS">In Progress</option>
                        <option :value="TaskStatus.DONE">Done</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { journeys, patients, staffs } from '../../data/mockData'
import { TaskStatus } from '../../types/enums' // Import TaskStatus enum

// Add expand/collapse state to each patient and filter out patients without journeys
const patientsWithJourneys = ref(
  patients
    .map((patient) => ({
      ...patient,
      isExpanded: false,
      journeys: journeys
        .filter((journey) => journey.patientId === patient.id)
        .map((journey) => {
          const staff = staffs.find((s) => s.id === journey.staffId)
          return {
            ...journey,
            staff: staff || { name: 'Unknown' },
          }
        }),
    }))
    .filter((patient) => patient.journeys.length > 0),
)

// Toggle expand/collapse state for a patient
function toggleExpand(patientId: string) {
  const patient = patientsWithJourneys.value.find((p) => p.id === patientId)
  if (patient) {
    patient.isExpanded = !patient.isExpanded
  }
}

// Update task status
function updateTaskStatus(journey: any, patientId: string) {
  console.log(`Task ID: ${journey.id}, New Status: ${journey.status}, Patient ID: ${patientId}`)
  // Add logic to persist the updated status (e.g., API call or state management)
}

// Grouped journeys by patient
const groupedJourneys = computed(() => patientsWithJourneys.value)
</script>
