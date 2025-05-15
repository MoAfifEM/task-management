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
    // {
    //   path: '/patients',
    //   name: 'patients',
    //   component: () => import('../pages/patients/Index.vue'),
    //   meta: { requiresAuth: true },
    // },
    // {
    //   path: '/tasks',
    //   name: 'tasks',
    //   component: () => import('../pages/tasks/Index.vue'),
    //   meta: { requiresAuth: true },
    // },
    // {
    //   path: '/workflows',
    //   name: 'workflows',
    //   component: () => import('../pages/workflows/Index.vue'),
    //   meta: { requiresAuth: true },
    // },
    // {
    //   path: '/journeys',
    //   name: 'journeys',
    //   component: () => import('../pages/journeys/Index.vue'),
    //   meta: { requiresAuth: true },
    // },
    {
      path: '/staff/tasks',
      name: 'staffTasks',
      component: () => import('../pages/staff/MyTask.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/staff/plans',
      name: 'staffPlans',
      component: () => import('../pages/staff/TaskPlan.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/staff/journeys',
      name: 'staffJourneys',
      component: () => import('../pages/staff/Journey.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/staff/patients',
      name: 'staffPatients',
      component: () => import('../pages/patients/Index.vue'),
      meta: { requiresAuth: true },
    },
    // V2 style
    {
      path: '/v2/patients',
      name: 'v2Patients',
      component: () => import('../pages/v2/patients/Index.vue'),
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
