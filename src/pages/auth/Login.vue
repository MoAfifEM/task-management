<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Login</h1>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 mb-2"
            >Username</label
          >
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            class="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
      <p class="mt-6 text-sm text-center text-gray-600">
        Don't have an account?
        <a href="/register" class="text-blue-500 hover:underline">Register here</a>
      </p>
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
