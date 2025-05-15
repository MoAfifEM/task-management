import type { Department, TaskStatus } from './enums'
export interface Staff {
  id: string
  username: string
  password: string
  name: string
  contactNo: string
  department: Department
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
  department: Department
}

export interface Workflow {
  id: string
  name: string
  description?: string
  tasks: Task[]
}

export interface Journey {
  id: string
  patientId: string
  workflowId: string
  status: TaskStatus
  task: Task
  staffId: string
  createdAt: string
  completedAt?: string
}
