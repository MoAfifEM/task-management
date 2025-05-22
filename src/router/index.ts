import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/auth/Login.vue'
import { useAuthStore } from '@/stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../pages/dashboard/Index.vue'),
      meta: { requiresAuth: false },
    },
    // V2 style
    {
      path: '/v2/patients',
      name: 'v2Patients',
      component: () => import('../pages/v2/patients/Index.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/v2/tasks',
      name: 'v2Tasks',
      component: () => import('../pages/v2/tasks/Index.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // Make sure authStore is initialized
  if (!authStore.user && localStorage.getItem('task_management_auth')) {
    authStore.loadFromStorage()
  }

  if (to.meta.requiresAuth && !authStore.user) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
