<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <!-- Global Toast -->
    <Toast />

    <!-- Header -->
    <header class="bg-white shadow p-4 flex items-center justify-between">
      <h1 @click="sidebarOpen = true" class="text-xl font-semibold">Nurse Task System</h1>
      <button class="sm:hidden text-gray-600" @click="sidebarOpen = true">
        <i class="pi pi-bars text-xl"></i>
      </button>
    </header>

    <!-- Main Layout -->
    <div class="flex flex-1">
      <!-- Sidebar (desktop only) -->
      <aside class="hidden sm:block w-64 bg-white p-4 shadow-lg">
        <SidebarLinks />
      </aside>

      <!-- Page Content -->
      <main class="flex-1 p-4">
        <RouterView />
      </main>
    </div>

    <!-- Sidebar Overlay for Mobile -->
    <transition name="fade">
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 z-40 bg-black bg-opacity-50 sm:hidden"
        @click="sidebarOpen = false"
      ></div>
    </transition>

    <transition name="slide">
      <aside
        v-if="sidebarOpen"
        class="fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg p-4 sm:hidden transition-transform"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Menu</h2>
          <button @click="sidebarOpen = false">
            <i class="pi pi-times text-xl"></i>
          </button>
        </div>
        <SidebarLinks @link-click="sidebarOpen = false" />
      </aside>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Toast from 'primevue/toast'
import SidebarLinks from './components/SidebarLinks.vue'

const sidebarOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
