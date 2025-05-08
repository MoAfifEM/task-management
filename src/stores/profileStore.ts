import { defineStore } from 'pinia'
import type { Staff } from '../types/models'

interface ProfileState {
  profile: Staff | null
}

const STORAGE_KEY = 'task_management_profile'

export const useProfileStore = defineStore('profile', {
  state: (): ProfileState => ({
    profile: null,
  }),

  actions: {
    setProfile(staff: Staff) {
      this.profile = staff
      localStorage.setItem(STORAGE_KEY, JSON.stringify(staff))
    },

    clearProfile() {
      this.profile = null
      localStorage.removeItem(STORAGE_KEY)
    },

    loadFromStorage() {
      const data = localStorage.getItem(STORAGE_KEY)
      if (data) {
        this.profile = JSON.parse(data)
      }
    },
  },
})
