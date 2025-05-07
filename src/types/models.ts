import type { TaskStatus } from './enums'
export interface Staff {
  id: string
  username: string
  password: string
  name: string
  contactNo: string
}

export interface Patient {
  id: string
  fullName: string
  identityNo: string
  birthDate: string
  contactNo: string
  address: string
}

export interface Task {
  id: string
  title: string
  description?: string
  patientId: string
  staffId: string
  status: TaskStatus
}
