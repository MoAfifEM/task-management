<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Toast (Global) -->
    <Toast />

    <!-- Header/Navbar -->
    <header class="navbar navbar-light bg-light shadow-sm px-3">
      <div class="container-fluid">
        <h1 class="navbar-brand mb-0 h4">Nurse Task System</h1>
        <button class="btn btn-outline-secondary d-sm-none" @click="sidebarOpen = !sidebarOpen">
          <i class="pi pi-bars"></i>
        </button>
      </div>
    </header>

    <!-- Body Layout -->
    <div class="container-fluid flex-grow-1 d-flex p-0">
      <!-- Sidebar (always visible on sm and up) -->
      <aside
        class="bg-white border-end p-3 d-none d-sm-block"
        style="width: 250px; min-height: 100%"
      >
        <SidebarLinks />
      </aside>

      <!-- Sidebar (offcanvas for mobile) -->
      <div
        class="offcanvas offcanvas-start show"
        tabindex="-1"
        :class="{ 'd-block': sidebarOpen, 'd-none': !sidebarOpen }"
        style="width: 250px; z-index: 1045"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Menu</h5>
          <button type="button" class="btn-close" @click="sidebarOpen = false"></button>
        </div>
        <div class="offcanvas-body p-3">
          <SidebarLinks @link-click="sidebarOpen = false" />
        </div>
      </div>

      <!-- Overlay backdrop on mobile -->
      <div
        v-if="sidebarOpen"
        class="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-sm-none"
        style="z-index: 1040"
        @click="sidebarOpen = false"
      ></div>

      <!-- Page Content -->
      <main class="flex-grow-1 p-4 overflow-auto p-3 p-sm-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Toast from 'primevue/toast'
import SidebarLinks from './components/SidebarLinks.vue'
import { useAuthStore } from './stores/authStore'
import { useProfileStore } from './stores/profileStore'

const sidebarOpen = ref(false)

onMounted(() => {
  useAuthStore().loadFromStorage()
  useProfileStore().loadFromStorage()
})
</script>
