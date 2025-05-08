<template>
  <div class="container-fluid vh-100 d-flex flex-column">
    <h4 class="mb-3">Patient List</h4>

    <!-- Scrollable container for patient cards -->
    <div class="flex-grow-1 overflow-auto">
      <div class="row g-3">
        <div class="col-12 col-md-6 col-lg-4 mb-3" v-for="patient in data" :key="patient.id">
          <div
            class="card shadow-sm h-100 d-flex flex-row align-items-center justify-content-between p-3"
          >
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { patients } from '@/data/mockData'

const avatar =
  'https://cdna.artstation.com/p/assets/images/images/038/652/346/large/joe-parente-joji-pink-guy-comp-01.jpg?1623691200' // Placeholder avatar URL

const data = ref(patients)

function viewDetails(patient: Patient) {
  alert(`Viewing details for ${patient.fullName}`)
}
</script>
