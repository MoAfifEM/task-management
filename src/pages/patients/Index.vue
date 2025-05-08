<template>
  <div class="container-fluid vh-100 d-flex flex-column">
    <h4 class="mb-3">Patient List</h4>

    <!-- Scrollable container for patient cards -->
    <div class="flex-grow-1 overflow-auto">
      <div class="row g-3">
        <div class="col-12 col-md-6 col-lg-4" v-for="patient in data" :key="patient.id">
          <div class="card shadow-sm h-100">
            <div class="card-body d-flex align-items-center justify-content-between">
              <!-- Patient info -->
              <div class="d-flex align-items-center">
                <img
                  :src="avatar"
                  alt="Avatar"
                  class="rounded-circle me-3"
                  style="width: 50px; height: 50px; object-fit: cover"
                />
                <div>
                  <h6 class="mb-0">{{ patient.fullName }}</h6>
                  <small class="text-muted">{{ patient.contactNo }}</small>
                </div>
              </div>

              <!-- Action button -->
              <button class="btn btn-outline-primary btn-sm ms-3" @click="viewDetails(patient)">
                View
              </button>
            </div>
            <div class="card-footer bg-light">
              <!-- Dropdown for workflows -->
              <div class="dropdown">
                <button
                  class="btn btn-secondary btn-sm dropdown-toggle w-100"
                  type="button"
                  id="workflowDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ selectedWorkflow ? selectedWorkflow.name : 'Select a Workflow' }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="workflowDropdown">
                  <li
                    v-for="workflow in workflows"
                    :key="workflow.id"
                    @click="selectWorkflow(patient, workflow)"
                  >
                    <button class="dropdown-item">{{ workflow.name }}</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { patients, workflows } from '../../data/mockData'
import type { Workflow } from '../../types/models'
import type { Patient } from '../../types/models'

const avatar =
  'https://cdna.artstation.com/p/assets/images/images/038/652/346/large/joe-parente-joji-pink-guy-comp-01.jpg?1623691200' // Placeholder avatar URL

const data = ref(patients)
const selectedWorkflow = ref<Workflow | null>(null)

function viewDetails(patient: Patient) {
  alert(`Viewing details for ${patient.fullName}`)
}

function selectWorkflow(patient: Patient, workflow: Workflow) {
  alert(`Viewing details for ${patient.fullName} with workflow ${workflow.name}`)
}
</script>
