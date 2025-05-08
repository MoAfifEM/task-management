<template>
  <nav class="nav flex-column">
    <RouterLink
      to="/dashboard"
      class="nav-link"
      active-class="fw-bold text-primary"
      @click="$emit('link-click')"
    >
      <i class="pi pi-home me-2" /> Dashboard
    </RouterLink>
    <RouterLink
      to="/patients"
      class="nav-link"
      active-class="fw-bold text-primary"
      @click="$emit('link-click')"
    >
      <i class="pi pi-users me-2" /> Patients
    </RouterLink>
    <RouterLink
      to="/tasks"
      å
      class="nav-link"
      active-class="fw-bold text-primary"
      @click="$emit('link-click')"
    >
      <i class="pi pi-users me-2" /> Tasks
    </RouterLink>
    <RouterLink
      to="/workflows"
      å
      class="nav-link"
      active-class="fw-bold text-primary"
      @click="$emit('link-click')"
    >
      <i class="pi pi-users me-2" /> Workflows
    </RouterLink>
    <RouterLink
      to="/journeys"
      å
      class="nav-link"
      active-class="fw-bold text-primary"
      @click="$emit('link-click')"
    >
      <i class="pi pi-users me-2" /> Journeys
    </RouterLink>
    <!-- <RouterLink
      to="/staff"
      class="nav-link"
      active-class="fw-bold text-primary"
      @click="$emit('link-click')"
    >
      <i class="pi pi-user me-2" /> Staff
    </RouterLink>
    <RouterLink
      to="/tasks"
      class="nav-link"
      active-class="fw-bold text-primary"
      @click="$emit('link-click')"
    >
      <i class="pi pi-list-check me-2" /> Tasks
    </RouterLink> -->
    <RouterLink
      to="/login"
      class="nav-link"
      active-class="fw-bold text-primary"
      @click="$emit('link-click')"
    >
      <i class="pi pi-users me-2" /> Logout
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
defineEmits(['link-click'])
</script>
