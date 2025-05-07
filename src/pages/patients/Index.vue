<template>
  <div class="p-4 md:p-6">
    <h1 class="text-2xl md:text-3xl font-bold mb-4">Patients</h1>
    <div class="max-h-[70vh] overflow-y-auto space-y-4">
      <div
        v-for="(patient, index) in data"
        :key="index"
        class="border p-4 rounded-lg shadow bg-white"
      >
        <h2 class="text-lg md:text-xl font-semibold">{{ patient.fullName }}</h2>
        <p class="text-sm md:text-base text-gray-600">Username: {{ patient.username }}</p>
        <p class="text-sm md:text-base text-gray-600">Phone: {{ patient.contactNo }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { patients } from '@/data/mockData'

const data = ref(patients) // Using mock data from mockData.ts
</script>
