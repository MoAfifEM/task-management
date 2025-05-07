<template>
  <div class="p-4 space-y-6">
    <!-- Header -->
    <h1 class="text-2xl font-semibold text-gray-800">Dashboard</h1>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">Total Patients</p>
          <p class="text-xl font-bold text-gray-800">{{ totalPatients }}</p>
        </div>
        <i class="pi pi-users text-3xl text-blue-500"></i>
      </div>

      <div class="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">Active Nurses</p>
          <p class="text-xl font-bold text-gray-800">{{ totalStaff }}</p>
        </div>
        <i class="pi pi-user text-3xl text-green-500"></i>
      </div>

      <div class="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">Tasks Today</p>
          <p class="text-xl font-bold text-gray-800">{{ todayTasks }}</p>
        </div>
        <i class="pi pi-calendar text-3xl text-yellow-500"></i>
      </div>

      <div class="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-500">Completed Tasks</p>
          <p class="text-xl font-bold text-gray-800">{{ completedTasks }}</p>
        </div>
        <i class="pi pi-check-circle text-3xl text-purple-500"></i>
      </div>
    </div>

    <!-- Task Summary Table (Mobile-friendly) -->
    <div class="bg-white rounded-2xl shadow p-4">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">Recent Tasks</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm text-left">
          <thead class="bg-gray-100 text-gray-600">
            <tr>
              <th class="p-2">Task</th>
              <th class="p-2">Staff</th>
              <th class="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in recentTasks" :key="task.id" class="border-b hover:bg-gray-50">
              <td class="p-2">{{ task.title }}</td>
              <td class="p-2">{{ task.staffName }}</td>
              <td class="p-2">
                <span
                  :class="[
                    'px-2 py-1 rounded-full text-xs',
                    task.status === 'DONE'
                      ? 'bg-green-100 text-green-700'
                      : task.status === 'IN_PROGRESS'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700',
                  ]"
                >
                  {{ task.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Simulated mock data
const totalPatients = ref(42)
const totalStaff = ref(10)
const todayTasks = ref(8)
const completedTasks = ref(5)

const recentTasks = ref([
  { id: 't1', title: 'Administer Medication', staffName: 'Nurse Lisa', status: 'DONE' },
  { id: 't2', title: 'Check Vitals', staffName: 'Nurse John', status: 'IN_PROGRESS' },
  { id: 't3', title: 'Clean Wound', staffName: 'Nurse Emma', status: 'PENDING' },
])
</script>

<style scoped>
/* optional custom styling */
</style>
