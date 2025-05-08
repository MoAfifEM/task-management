<template>
  <div class="d-flex align-items-center justify-content-center vh-100 bg-light">
    <div class="card shadow-sm" style="max-width: 400px; width: 100%">
      <div class="card-body p-4">
        <h1 class="text-center mb-4">Login</h1>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Enter your username"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
        <p class="text-center mt-3">
          Don't have an account?
          <a href="/register" class="text-primary">Register here</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import { useAuthStore } from '../../stores/authStore'

export default {
  name: 'Login',
  setup() {
    const authStore = useAuthStore()
    const toast = useToast()
    const router = useRouter()

    const username = ref('')
    const password = ref('')

    const isUserLoggedIn = computed(() => authStore.user !== null)

    // Trigger logout when this page is accessed
    onMounted(() => {
      if (isUserLoggedIn.value) {
        authStore.logout() // Call the logout method from your auth store
        toast.add({
          severity: 'info',
          summary: 'Logged Out',
          detail: 'You have been logged out.',
          life: 3000,
        })
      }
    })

    const handleLogin = () => {
      const success = authStore.login(username.value, password.value)
      if (success) {
        toast.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: `Welcome!`,
          life: 3000,
        })
        router.push('/dashboard') // Replace with your dashboard route
      } else {
        toast.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: 'Invalid username or password',
          life: 3000,
        })
        error.value = 'Invalid username or password'
      }
    }

    return {
      username,
      password,
      handleLogin,
    }
  },
}
</script>
