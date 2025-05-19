<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Toast (Global) -->
    <Toast />
    <GlobalNotification ref="globalNotify" />

    <!-- Mobile Layout -->
    <template v-if="isStaffPage">
      <header class="navbar navbar-light bg-light shadow-sm px-3">
        <div class="container-fluid">
          <h1 class="navbar-brand mb-0 h4">Staff Management</h1>
          <button class="btn btn-outline-secondary" @click="sidebarOpen = !sidebarOpen">
            <i class="pi pi-bars"></i>
          </button>
        </div>
      </header>

      <div class="container-fluid d-flex flex-column p-0" style="height: 100vh; overflow: hidden">
        <!-- Sidebar (mobile offcanvas) -->
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

        <!-- Backdrop overlay -->
        <div
          v-if="sidebarOpen"
          class="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style="z-index: 1040"
          @click="sidebarOpen = false"
        ></div>

        <!-- Page Content -->
        <main class="flex-grow-1 d-flex flex-column" style="overflow: hidden">
          <RouterView />
        </main>
      </div>
    </template>

    <!-- V2 Layout -->
    <template v-else-if="isV2Page">
      <div class="v2-layout">
        <BottomTabBar />
        <main class="v2-content">
          <RouterView />
        </main>
      </div>
    </template>

    <!-- Layout for non-auth pages -->
    <template v-else-if="!isAuthPage">
      <!-- Header/Navbar -->
      <header class="navbar navbar-light bg-light shadow-sm px-3">
        <div class="container-fluid">
          <h1 class="navbar-brand mb-0 h4">Nurse Task System</h1>
          <button class="btn btn-outline-secondary d-sm-none" @click="sidebarOpen = !sidebarOpen">
            <i class="pi pi-bars"></i>
          </button>
        </div>
      </header>

      <div class="container-fluid flex-grow-1 d-flex p-0">
        <!-- Sidebar (visible on sm and up) -->
        <aside
          class="bg-white border-end p-3 d-none d-sm-block"
          style="width: 250px; min-height: 100%"
        >
          <SidebarLinks />
        </aside>

        <!-- Sidebar (mobile offcanvas) -->
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

        <!-- Backdrop overlay on mobile -->
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
    </template>

    <!-- Auth-only pages (e.g., Login) -->
    <template v-else>
      <RouterView />
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Toast from 'primevue/toast'
import SidebarLinks from './components/SidebarLinks.vue'
import { useAuthStore } from './stores/authStore'
import { useProfileStore } from './stores/profileStore'
import BottomTabBar from './components/BottomTabBar.vue'
import { useSocket } from './composables/useSocket'
import GlobalNotification from '@/components/notifications/Modal.vue'
import { patients, workflows, staffs } from './data/mockData'

const sidebarOpen = ref(false)
const route = useRoute()

// Add routes that should not show layout (e.g., login, register)
const noLayoutRoutes = ['/login', '/dashboard']
const isAuthPage = computed(() => noLayoutRoutes.includes(route.path))

// Check if the current route is under staff/*
const isStaffPage = computed(() => route.path.startsWith('/staff'))
const isV2Page = computed(() => route.path.startsWith('/v2'))

const globalNotify = ref()
const { data: notification } = useSocket('notification')

const handleGlobalNotification = (e: Event) => {
  const detail = (e as CustomEvent).detail
  if (globalNotify.value && detail) {
    globalNotify.value.show(detail)
  }
}

let autoNotifTimeout: number | undefined
let demo = false

function getRandomDelay() {
  // Random delay between 5 seconds (5000ms) and 60 seconds (60000ms)
  // return Math.floor(Math.random() * (60000 - 5000 + 1)) + 5000
  return 2000
}

function startAutoTaskNotification() {
  function triggerNotification() {
    const patient = patients[Math.floor(Math.random() * patients.length)]
    const workflow = workflows[Math.floor(Math.random() * workflows.length)]
    const currentUser = useAuthStore().user

    if (!currentUser) {
      scheduleNext()
      return
    }

    // Pick a random staff for the task
    const staff = staffs[Math.floor(Math.random() * staffs.length)]
    const task = workflow.tasks[Math.floor(Math.random() * workflow.tasks.length)]

    // Only notify if assigned staff is the current user
    if (staff.id === currentUser.id) {
      const msg = `A new task "${task.title}" for workflow "${workflow.name}" has been assigned to you for patient "${patient.fullName}".`
      window.dispatchEvent(
        new CustomEvent('global-notification', {
          detail: msg,
        }),
      )
    }
    scheduleNext()
  }

  function scheduleNext() {
    autoNotifTimeout = window.setTimeout(triggerNotification, getRandomDelay())
  }

  scheduleNext()
}

function stopAutoTaskNotification() {
  if (autoNotifTimeout) {
    clearTimeout(autoNotifTimeout)
    autoNotifTimeout = undefined
  }
}

onMounted(() => {
  useAuthStore().loadFromStorage()
  useProfileStore().loadFromStorage()
  window.addEventListener('global-notification', handleGlobalNotification)
  watch(
    () => notification.value,
    (val) => {
      if (val && globalNotify.value) {
        globalNotify.value.show(val)
      }
    },
  )

  if (demo) {
    startAutoTaskNotification() // <-- Start auto notifications here
  }
})

onUnmounted(() => {
  window.removeEventListener('global-notification', handleGlobalNotification)
  if (demo) {
    stopAutoTaskNotification() // <-- Stop auto notifications here
  }
})
</script>

<style>
/* #app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
} */
.v2-layout {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #2a5f95;
  position: relative;
}
.v2-content {
  flex: 1 1 auto;
  overflow-y: auto;
  /* Add bottom padding equal to tab bar height (56px) to prevent content being hidden */
  padding-bottom: 56px;
}
@media (min-width: 576px) {
  .v2-layout,
  .v2-content {
    height: auto;
    padding-bottom: 0;
  }
}
</style>
