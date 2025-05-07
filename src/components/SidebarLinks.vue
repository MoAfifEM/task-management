<template>
  <nav class="space-y-2">
    <RouterLink
      to="/dashboard"
      class="block p-2 rounded hover:bg-blue-100"
      active-class="bg-blue-200 font-semibold"
      @click="$emit('link-click')"
    >
      <i class="pi pi-home mr-2" /> Dashboard
    </RouterLink>
    <RouterLink
      to="/patient"
      class="block p-2 rounded hover:bg-blue-100"
      active-class="bg-blue-200 font-semibold"
      @click="$emit('link-click')"
    >
      <i class="pi pi-users mr-2" /> Patients
    </RouterLink>
    <!-- <RouterLink
      to="/staff"
      class="block p-2 rounded hover:bg-blue-100"
      active-class="bg-blue-200 font-semibold"
      @click="$emit('link-click')"
    >
      <i class="pi pi-user mr-2" /> Staff
    </RouterLink>
    <RouterLink
      to="/tasks"
      class="block p-2 rounded hover:bg-blue-100"
      active-class="bg-blue-200 font-semibold"
      @click="$emit('link-click')"
    >
      <i class="pi pi-list-check mr-2" /> Tasks
    </RouterLink> -->
  </nav>
</template>

<script setup lang="ts">
// Emits: link-click (to close the sidebar on mobile)
defineEmits(['link-click'])
</script>
