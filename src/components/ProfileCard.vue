<template>
  <div class="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    <div class="flex items-center p-4">
      <img
        :src="avatar"
        alt="Avatar"
        class="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
      />
      <div class="ml-4">
        <h2 class="text-lg font-semibold text-gray-800">{{ name }}</h2>
        <p class="text-sm text-gray-600">{{ gender }}</p>
      </div>
    </div>
    <div class="p-4 border-t border-gray-200">
      <p class="text-sm text-gray-600">
        <span class="font-semibold">Date of Birth:</span> {{ dob }}
      </p>
      <p class="text-sm text-gray-600 mt-2">
        <span class="font-semibold">Contact:</span> {{ contact }}
      </p>
      <p class="text-sm text-gray-600 mt-2">
        <span class="font-semibold">Address:</span> {{ address }}
      </p>
    </div>
    <div class="p-4 border-t border-gray-200">
      <Button label="Tasks" @click="toggleTaskList" class="w-full" />
      <div v-if="showTasks" class="mt-2 max-h-40 overflow-y-auto border rounded-lg p-2 bg-gray-50">
        <ul>
          <li
            v-for="(task, index) in tasks"
            :key="index"
            class="text-sm text-gray-700 py-1 border-b last:border-b-0"
          >
            {{ task }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { Button } from 'primevue/button'

defineProps({
  patient: {
    type: Object,
    required: true,
  },
})

const name = ref(patient.name)
const gender = ref(patient.gender)
const avatar = ref(patient.avatar)
const dob = ref(patient.dob)
const contact = ref(patient.contact)
const address = ref(patient.address)

// Tasks functionality
const showTasks = ref(false)
const tasks = ref([
  'Task 1: Follow-up appointment',
  'Task 2: Lab results review',
  'Task 3: Prescription refill',
])

const toggleTaskList = () => {
  showTasks.value = !showTasks.value
}
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
