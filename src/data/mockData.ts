import { Department, TaskStatus } from '../types/enums'
import type { Staff, Patient, Task, Workflow, Journey } from '../types/models'

// --- Staff ---
export const staffs: Staff[] = [
  {
    id: 'staff-001',
    username: 'alice.nurse',
    password: 'admin123',
    name: 'Alice Tan',
    contactNo: '+60123456789',
  },
  {
    id: 'staff-002',
    username: 'bob.physio',
    password: 'admin123',
    name: 'Bob Lee',
    contactNo: '+60198765432',
  },
  {
    id: 'staff-003',
    username: 'chloe.radio',
    password: 'admin123',
    name: 'Chloe Lim',
    contactNo: '+60199887766',
  },
  {
    id: 'admin-001',
    username: 'admin',
    password: 'admin',
    name: 'Mo Afif',
    contactNo: '+60199887766',
  },
]

// --- Patients ---
export const patients: Patient[] = [
  {
    id: 'patient-001',
    fullName: 'John Doe',
    identityNo: '900101-14-1234',
    birthDate: '1990-01-01',
    contactNo: '+60123456780',
    address: '123 Main Street, Kuala Lumpur',
  },
  {
    id: 'patient-002',
    fullName: 'Jane Smith',
    identityNo: '850505-10-5678',
    birthDate: '1985-05-05',
    contactNo: '+60134567890',
    address: '456 Jalan Ampang, Selangor',
  },
  {
    id: 'patient-003',
    fullName: 'Aiman Rahman',
    identityNo: '921020-05-1212',
    birthDate: '1992-10-20',
    contactNo: '+60126784567',
    address: '78 Jalan Bukit Bintang, Kuala Lumpur',
  },
  {
    id: 'patient-004',
    fullName: 'Siti Mariam',
    identityNo: '880611-10-3333',
    birthDate: '1988-06-11',
    contactNo: '+60137654321',
    address: '21 Jalan Raja Laut, Selangor',
  },
  {
    id: 'patient-005',
    fullName: 'Michael Chong',
    identityNo: '950204-12-4567',
    birthDate: '1995-02-04',
    contactNo: '+60139887766',
    address: '34 Jalan Kuchai Lama, Kuala Lumpur',
  },
  {
    id: 'patient-006',
    fullName: 'Nur Aisyah',
    identityNo: '870809-08-7890',
    birthDate: '1987-08-09',
    contactNo: '+60134561234',
    address: '99 Jalan Taman Melawati, Kuala Lumpur',
  },
  {
    id: 'patient-007',
    fullName: 'Rajesh Kumar',
    identityNo: '930515-03-9876',
    birthDate: '1993-05-15',
    contactNo: '+60121231234',
    address: '15 Jalan Ipoh, Kuala Lumpur',
  },
  {
    id: 'patient-008',
    fullName: 'Wong Mei Ling',
    identityNo: '860712-11-6543',
    birthDate: '1986-07-12',
    contactNo: '+60132345678',
    address: '58 Jalan Tun Razak, Kuala Lumpur',
  },
  {
    id: 'patient-009',
    fullName: 'Faizal Hamzah',
    identityNo: '910923-06-4321',
    birthDate: '1991-09-23',
    contactNo: '+60145678901',
    address: '12 Jalan Damansara, Selangor',
  },
  {
    id: 'patient-010',
    fullName: 'Lim Wei Shen',
    identityNo: '940317-07-2222',
    birthDate: '1994-03-17',
    contactNo: '+60139881234',
    address: '44 Jalan Sentul, Kuala Lumpur',
  },
]

// --- Tasks (template) ---
export const tasks: Task[] = [
  {
    id: 'task-001',
    title: 'Check Vital Signs',
    description: 'Monitor and record temperature, pulse, and blood pressure.',
    status: TaskStatus.PENDING,
  },
  {
    id: 'task-002',
    title: 'Wound Dressing',
    description: 'Clean and dress surgical wound.',
    status: TaskStatus.PENDING,
  },
  {
    id: 'task-003',
    title: 'Stretching Exercise',
    description: 'Assisted stretching to improve range of motion.',
    status: TaskStatus.PENDING,
  },
  {
    id: 'task-004',
    title: 'Muscle Strength Training',
    description: 'Exercises focused on rebuilding muscle strength.',
    status: TaskStatus.PENDING,
  },
  {
    id: 'task-005',
    title: 'X-ray Scan',
    description: 'Chest and abdomen X-ray.',
    status: TaskStatus.PENDING,
  },
]

// --- Workflows ---
export const workflows: Workflow[] = [
  {
    id: 'workflow-001',
    name: 'Post-Surgery Care',
    description: 'Follow-up nursing tasks after surgery',
    department: Department.NURSING,
    tasks: [tasks[0], tasks[1]],
  },
  {
    id: 'workflow-002',
    name: 'Rehabilitation Program',
    description: 'Daily physiotherapy sessions',
    department: Department.PHYSIOTHERAPY,
    tasks: [tasks[2], tasks[3]],
  },
  {
    id: 'workflow-003',
    name: 'Radiology Checkup',
    description: 'Routine imaging procedures',
    department: Department.RADIOLOGY,
    tasks: [tasks[4]],
  },
]

// --- Journeys (current task + assigned staff) ---
export const journeys: Journey[] = [
  {
    id: 'journey-001',
    patientId: 'patient-001',
    workflowId: 'workflow-001',
    status: TaskStatus.IN_PROGRESS,
    task: {
      id: 'task-001',
      title: 'Check Vital Signs',
      status: TaskStatus.DONE,
    },
    staffId: 'staff-001', // Alice from NURSING
  },
  {
    id: 'journey-002',
    patientId: 'patient-001',
    workflowId: 'workflow-001',
    status: TaskStatus.IN_PROGRESS,
    task: {
      id: 'task-002',
      title: 'Wound Dressing',
      status: TaskStatus.IN_PROGRESS,
    },
    staffId: 'staff-001',
  },
  {
    id: 'journey-003',
    patientId: 'patient-002',
    workflowId: 'workflow-002',
    status: TaskStatus.PENDING,
    task: {
      id: 'task-003',
      title: 'Stretching Exercise',
      status: TaskStatus.PENDING,
    },
    staffId: 'staff-002', // Bob from PHYSIOTHERAPY
  },
  {
    id: 'journey-004',
    patientId: 'patient-002',
    workflowId: 'workflow-003',
    status: TaskStatus.PENDING,
    task: {
      id: 'task-005',
      title: 'X-ray Scan',
      status: TaskStatus.PENDING,
    },
    staffId: 'staff-003', // Chloe from RADIOLOGY
  },
]
