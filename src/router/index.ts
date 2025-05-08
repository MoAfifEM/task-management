import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/auth/Login.vue'

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
    },
    {
      path: '/patients',
      name: 'patients',
      component: () => import('../pages/patients/Index.vue'),
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../pages/tasks/Index.vue'),
    },
    {
      path: '/workflows',
      name: 'workflows',
      component: () => import('../pages/workflows/Index.vue'),
    },
    {
      path: '/journeys',
      name: 'journeys',
      component: () => import('../pages/journeys/Index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
