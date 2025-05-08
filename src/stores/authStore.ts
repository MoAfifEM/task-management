// stores/authStore.ts
import { defineStore } from 'pinia'
import type { Staff } from '../types/models'
import { useProfileStore } from './profileStore'
import { staffs } from '../data/mockData'

interface AuthState {
  user: Staff | null
  token: string | null
}

const STORAGE_KEY = 'task_management_auth'

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
  }),

  actions: {
    login(username: string, password: string) {
      const found = staffs.find(
        (staff) => staff.username === username && staff.password === password,
      )

      if (found) {
        this.user = found
        this.token = `token-${found.id}`
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ user: found, token: this.token }))
        useProfileStore().setProfile(found)
        return true
      }

      return false
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem(STORAGE_KEY)
      useProfileStore().clearProfile()
    },

    loadFromStorage() {
      const data = localStorage.getItem(STORAGE_KEY)
      if (data) {
        const parsed = JSON.parse(data)
        this.user = parsed.user
        this.token = parsed.token
        useProfileStore().setProfile(parsed.user)
      }
    },
  },
})
