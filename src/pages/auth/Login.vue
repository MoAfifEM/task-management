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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import { staffs } from '../../data/mockData'

export default {
  name: 'Login',
  setup() {
    const toast = useToast()
    const router = useRouter()

    const username = ref('')
    const password = ref('')

    function handleLogin() {
      const user = staffs.find(
        (staff) => staff.username === username.value && staff.password === password.value,
      )

      if (user) {
        toast.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: `Welcome back, ${user.name}!`,
          life: 3000,
        })
        router.push('/dashboard')
      } else {
        toast.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: 'Invalid username or password',
          life: 3000,
        })
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
