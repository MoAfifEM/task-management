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
    department: Department.NURSING,
  },
  {
    id: 'staff-002',
    username: 'bob.physio',
    password: 'admin123',
    name: 'Bob Lee',
    contactNo: '+60198765432',
    department: Department.PHYSIOTHERAPY,
  },
  {
    id: 'staff-003',
    username: 'chloe.radio',
    password: 'admin123',
    name: 'Chloe Lim',
    contactNo: '+60199887766',
    department: Department.RADIOLOGY,
  },
  {
    id: 'staff-004',
    username: 'david.cardiology',
    password: 'admin123',
    name: 'David Wong',
    contactNo: '+60123456788',
    department: Department.CARDIOLOGY,
  },
  {
    id: 'staff-005',
    username: 'emma.dermatology',
    password: 'admin123',
    name: 'Emma Tan',
    contactNo: '+60134567891',
    department: Department.DERMATOLOGY,
  },
  {
    id: 'staff-006',
    username: 'fiona.gynecology',
    password: 'admin123',
    name: 'Fiona Lee',
    contactNo: '+60145678902',
    department: Department.GYNECOLOGY,
  },
  {
    id: 'admin-001',
    username: 'admin',
    password: 'admin',
    name: 'Mo Afif',
    contactNo: '+60199887766',
    department: Department.ADMINISTRATION,
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
    department: Department.NURSING,
  },
  {
    id: 'task-002',
    title: 'Wound Dressing',
    description: 'Clean and dress surgical wound.',
    department: Department.NURSING,
  },
  {
    id: 'task-003',
    title: 'Stretching Exercise',
    description: 'Assisted stretching to improve range of motion.',
    department: Department.PHYSIOTHERAPY,
  },
  {
    id: 'task-004',
    title: 'Muscle Strength Training',
    description: 'Exercises focused on rebuilding muscle strength.',
    department: Department.PHYSIOTHERAPY,
  },
  {
    id: 'task-005',
    title: 'X-ray Scan',
    description: 'Chest and abdomen X-ray.',
    department: Department.RADIOLOGY,
  },
  {
    id: 'task-006',
    title: 'Cardiac Stress Test',
    description: 'Monitor heart activity during physical exertion.',
    department: Department.CARDIOLOGY,
  },
  {
    id: 'task-007',
    title: 'Skin Allergy Test',
    description: 'Identify allergic reactions to various substances.',
    department: Department.DERMATOLOGY,
  },
  {
    id: 'task-008',
    title: 'Prenatal Ultrasound',
    description: 'Monitor fetal development and maternal health.',
    department: Department.GYNECOLOGY,
  },
]

// --- Workflows ---
export const workflows: Workflow[] = [
  {
    id: 'workflow-001',
    name: 'Post-Surgery Care',
    description: 'Follow-up nursing tasks after surgery',
    tasks: [tasks[0], tasks[1]],
  },
  {
    id: 'workflow-002',
    name: 'Rehabilitation Program',
    description: 'Daily physiotherapy sessions',
    tasks: [tasks[2], tasks[3]],
  },
  {
    id: 'workflow-003',
    name: 'Radiology Checkup',
    description: 'Routine imaging procedures',
    tasks: [tasks[4]],
  },
  {
    id: 'workflow-004',
    name: 'Specialized Care',
    description: 'Comprehensive care involving cardiology, dermatology, and gynecology',
    tasks: [tasks[5], tasks[6], tasks[7]],
  },
]

// --- Journeys (current task + assigned staff) ---
export const journeys: Journey[] = [
  {
    id: 'journey-001',
    patientId: 'patient-001',
    workflowId: 'workflow-001',
    status: TaskStatus.DONE,
    task: {
      id: 'task-001',
      title: 'Check Vital Signs',
      description: 'Monitor and record temperature, pulse, and blood pressure.',
      department: Department.NURSING,
    },
    staffId: 'staff-001', // Alice from NURSING
    createdAt: '2025-05-01T08:00:00Z',
    completedAt: '2025-05-01T09:00:00Z',
  },
  {
    id: 'journey-002',
    patientId: 'patient-001',
    workflowId: 'workflow-001',
    status: TaskStatus.PENDING,
    task: {
      id: 'task-002',
      title: 'Wound Dressing',
      description: 'Clean and dress surgical wound.',
      department: Department.NURSING,
    },
    staffId: 'staff-001', // Alice from NURSING
    createdAt: '2025-05-02T10:00:00Z',
  },
  {
    id: 'journey-003',
    patientId: 'patient-002',
    workflowId: 'workflow-002',
    status: TaskStatus.DONE,
    task: {
      id: 'task-003',
      title: 'Stretching Exercise',
      description: 'Assisted stretching to improve range of motion.',
      department: Department.PHYSIOTHERAPY,
    },
    staffId: 'staff-002', // Bob from PHYSIOTHERAPY
    createdAt: '2025-05-03T11:00:00Z',
    completedAt: '2025-05-03T12:00:00Z',
  },
  {
    id: 'journey-004',
    patientId: 'patient-002',
    workflowId: 'workflow-002',
    status: TaskStatus.PENDING,
    task: {
      id: 'task-004',
      title: 'Muscle Strength Training',
      description: 'Exercises focused on rebuilding muscle strength.',
      department: Department.PHYSIOTHERAPY,
    },
    staffId: 'staff-002', // Bob from PHYSIOTHERAPY
    createdAt: '2025-05-04T13:00:00Z',
  },
  {
    id: 'journey-005',
    patientId: 'patient-003',
    workflowId: 'workflow-003',
    status: TaskStatus.PENDING,
    task: {
      id: 'task-005',
      title: 'X-ray Scan',
      description: 'Chest and abdomen X-ray.',
      department: Department.RADIOLOGY,
    },
    staffId: 'staff-003', // Chloe from RADIOLOGY
    createdAt: '2025-05-05T14:00:00Z',
  },
  {
    id: 'journey-006',
    patientId: 'patient-004',
    workflowId: 'workflow-004',
    status: TaskStatus.PENDING,
    task: {
      id: 'task-006',
      title: 'Cardiac Stress Test',
      description: 'Monitor heart activity during physical exertion.',
      department: Department.CARDIOLOGY,
    },
    staffId: 'staff-004', // David Wong from CARDIOLOGY
    createdAt: '2025-05-06T15:00:00Z',
  },
]
