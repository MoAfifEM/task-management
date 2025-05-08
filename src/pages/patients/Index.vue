<template>
  <div class="p-4 md:p-6">
    <h1 class="text-2xl md:text-3xl font-bold mb-4">Patients</h1>
    <div class="max-h-[70vh] overflow-y-auto space-y-4">
      <div
        v-for="(patient, index) in data"
        :key="index"
        class="border p-4 rounded-lg shadow bg-white m-4"
      >
        <div class="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div class="flex items-center p-4">
            <img
              :src="avatar"
              alt="Avatar"
              class="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
            />
            <div class="ml-4">
              <h2 class="text-lg font-semibold text-gray-800">{{ patient.fullName }}</h2>
              <p class="text-sm text-gray-600">{{ patient.identityNo }}</p>
            </div>
          </div>
          <div class="p-4 border-t border-gray-200">
            <p class="text-sm text-gray-600">
              <span class="font-semibold">Date of Birth:</span> {{ patient.birthDate }}
            </p>
            <p class="text-sm text-gray-600 mt-2">
              <span class="font-semibold">Contact:</span> {{ patient.contactNo }}
            </p>
            <p class="text-sm text-gray-600 mt-2">
              <span class="font-semibold">Address:</span> {{ patient.address }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { patients } from '@/data/mockData'

const data = ref(patients) // Using mock data from mockData.ts
</script>
