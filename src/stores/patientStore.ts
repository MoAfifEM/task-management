// stores/patientStore.ts
import { defineStore } from 'pinia'
import type { Patient } from '../types/models'
import { patients } from '../data/mockData'

export const usePatientStore = defineStore('patient', {
  state: () => ({
    patients: [] as Patient[],
    patient: {} as Patient,
  }),

  actions: {
    loadPatients() {
      // Replace with your own mock data
      this.patients = patients
    },

    getPatientById(id: string): Patient | undefined {
      return (this.patient = this.patients.find((p) => p.id === id) || ({} as Patient))
    },
  },
})
