<template>
  <nav class="nav flex-column">
    <!-- <RouterLink
      to="/dashboard"
      class="nav-link"
      active-class="fw-bold text-primary"
      @click="$emit('link-click')"
    >
      <i class="pi pi-home me-2" /> Dashboard
    </RouterLink> -->
    <!-- Test -->
    <RouterLink
      to="/staff/patients"
      class="nav-link"
      active-class="fw-bold text-primary"
      @click="$emit('link-click')"
    >
      <i class="pi pi-users me-2" /> Patients
    </RouterLink>
    <RouterLink
      to="/staff/tasks"
      class="nav-link"
      active-class="fw-bold text-primary"
      @click="$emit('link-click')"
    >
      <i class="pi pi-users me-2" /> Tasks
    </RouterLink>
    <!-- <RouterLink
      to="/workflows"
      class="nav-link"
      active-class="fw-bold text-primary"
      @click="$emit('link-click')"
    >
      <i class="pi pi-users me-2" /> Workflows
    </RouterLink> -->
    <RouterLink
      to="/staff/journeys"
      class="nav-link"
      active-class="fw-bold text-primary"
      @click="$emit('link-click')"
    >
      <i class="pi pi-users me-2" /> Journeys
    </RouterLink>

    <!-- Dropdown for Staff -->
    <!-- <div class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="staffDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="pi pi-user me-2" /> Staff
      </a>
      <ul class="dropdown-menu" aria-labelledby="staffDropdown">
        <li>
          <RouterLink to="/staff/plans" class="dropdown-item" @click="$emit('link-click')">
            Plans
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/staff/tasks" class="dropdown-item" @click="$emit('link-click')">
            Tasks
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/staff/journeys" class="dropdown-item" @click="$emit('link-click')">
            Journeys
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/staff/patients" class="dropdown-item" @click="$emit('link-click')">
            Patients
          </RouterLink>
        </li>
      </ul>
    </div> -->

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
