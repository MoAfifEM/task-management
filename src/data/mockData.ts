import { Department, TaskStatus } from '../types/enums'
import type { Staff, Patient, Task, Workflow, Journey } from '../types/models'

// --- Staff ---
export const staffs: Staff[] = [
  // ADMINISTRATION
  {
    id: 'admin-001',
    username: 'sarah.admin',
    password: 'admin123',
    name: 'Sarah Admin',
    contactNo: '+60199887767',
    department: Department.ADMINISTRATION,
  },
  {
    id: 'admin-002',
    username: 'john.admin',
    password: 'admin123',
    name: 'John Admin',
    contactNo: '+60199887768',
    department: Department.ADMINISTRATION,
  },
  {
    id: 'admin-003',
    username: 'admin',
    password: 'admin',
    name: 'Mo Afif',
    contactNo: '+60199887766',
    department: Department.ADMINISTRATION,
  },

  // NURSING
  {
    id: 'nurse-001',
    username: 'alice.nurse',
    password: 'admin123',
    name: 'Alice Tan',
    contactNo: '+60123456789',
    department: Department.NURSING,
  },
  {
    id: 'nurse-002',
    username: 'bella.nurse',
    password: 'admin123',
    name: 'Bella Nurse',
    contactNo: '+60123456790',
    department: Department.NURSING,
  },
  {
    id: 'nurse-003',
    username: 'cindy.nurse',
    password: 'admin123',
    name: 'Cindy Nurse',
    contactNo: '+60123456791',
    department: Department.NURSING,
  },

  // HOUSEKEEPING
  {
    id: 'house-001',
    username: 'bob.housekeeping',
    password: 'admin123',
    name: 'Bob Housekeeper',
    contactNo: '+60123456781',
    department: Department.HOUSEKEEPING,
  },
  {
    id: 'house-002',
    username: 'dina.housekeeping',
    password: 'admin123',
    name: 'Dina Housekeeper',
    contactNo: '+60123456792',
    department: Department.HOUSEKEEPING,
  },
  {
    id: 'house-003',
    username: 'eric.housekeeping',
    password: 'admin123',
    name: 'Eric Housekeeper',
    contactNo: '+60123456793',
    department: Department.HOUSEKEEPING,
  },

  // PORTER
  {
    id: 'porter-001',
    username: 'charlie.porter',
    password: 'admin123',
    name: 'Charlie Porter',
    contactNo: '+60123456782',
    department: Department.PORTER,
  },
  {
    id: 'porter-002',
    username: 'fiona.porter',
    password: 'admin123',
    name: 'Fiona Porter',
    contactNo: '+60123456794',
    department: Department.PORTER,
  },
  {
    id: 'porter-003',
    username: 'george.porter',
    password: 'admin123',
    name: 'George Porter',
    contactNo: '+60123456795',
    department: Department.PORTER,
  },

  // DIETARY
  {
    id: 'diet-001',
    username: 'diana.dietary',
    password: 'admin123',
    name: 'Diana Dietary',
    contactNo: '+60123456783',
    department: Department.DIETARY,
  },
  {
    id: 'diet-002',
    username: 'hannah.dietary',
    password: 'admin123',
    name: 'Hannah Dietary',
    contactNo: '+60123456796',
    department: Department.DIETARY,
  },
  {
    id: 'diet-003',
    username: 'ian.dietary',
    password: 'admin123',
    name: 'Ian Dietary',
    contactNo: '+60123456797',
    department: Department.DIETARY,
  },

  // PHARMACY
  {
    id: 'pharm-001',
    username: 'edward.pharmacy',
    password: 'admin123',
    name: 'Edward Pharmacy',
    contactNo: '+60123456784',
    department: Department.PHARMACY,
  },
  {
    id: 'pharm-002',
    username: 'julia.pharmacy',
    password: 'admin123',
    name: 'Julia Pharmacy',
    contactNo: '+60123456798',
    department: Department.PHARMACY,
  },
  {
    id: 'pharm-003',
    username: 'kevin.pharmacy',
    password: 'admin123',
    name: 'Kevin Pharmacy',
    contactNo: '+60123456799',
    department: Department.PHARMACY,
  },

  // DOCTOR
  {
    id: 'doc-001',
    username: 'fiona.doctor',
    password: 'admin123',
    name: 'Fiona Doctor',
    contactNo: '+60123456785',
    department: Department.DOCTOR,
  },
  {
    id: 'doc-002',
    username: 'liam.doctor',
    password: 'admin123',
    name: 'Liam Doctor',
    contactNo: '+60123456800',
    department: Department.DOCTOR,
  },
  {
    id: 'doc-003',
    username: 'maya.doctor',
    password: 'admin123',
    name: 'Maya Doctor',
    contactNo: '+60123456801',
    department: Department.DOCTOR,
  },

  // TEAM_LEAD
  {
    id: 'lead-001',
    username: 'george.teamlead',
    password: 'admin123',
    name: 'George TeamLead',
    contactNo: '+60123456786',
    department: Department.TEAM_LEAD,
  },
  {
    id: 'lead-002',
    username: 'nina.teamlead',
    password: 'admin123',
    name: 'Nina TeamLead',
    contactNo: '+60123456802',
    department: Department.TEAM_LEAD,
  },
  {
    id: 'lead-003',
    username: 'oliver.teamlead',
    password: 'admin123',
    name: 'Oliver TeamLead',
    contactNo: '+60123456803',
    department: Department.TEAM_LEAD,
  },

  // ICU_NURSING
  {
    id: 'icu-001',
    username: 'hannah.icunurse',
    password: 'admin123',
    name: 'Hannah ICU Nurse',
    contactNo: '+60123456787',
    department: Department.ICU_NURSING,
  },
  {
    id: 'icu-002',
    username: 'paul.icunurse',
    password: 'admin123',
    name: 'Paul ICU Nurse',
    contactNo: '+60123456804',
    department: Department.ICU_NURSING,
  },
  {
    id: 'icu-003',
    username: 'quinn.icunurse',
    password: 'admin123',
    name: 'Quinn ICU Nurse',
    contactNo: '+60123456805',
    department: Department.ICU_NURSING,
  },

  // PHYSIOTHERAPY
  {
    id: 'physio-001',
    username: 'ian.physio',
    password: 'admin123',
    name: 'Ian Physio',
    contactNo: '+60123456788',
    department: Department.PHYSIOTHERAPY,
  },
  {
    id: 'physio-002',
    username: 'rachel.physio',
    password: 'admin123',
    name: 'Rachel Physio',
    contactNo: '+60123456806',
    department: Department.PHYSIOTHERAPY,
  },
  {
    id: 'physio-003',
    username: 'sam.physio',
    password: 'admin123',
    name: 'Sam Physio',
    contactNo: '+60123456807',
    department: Department.PHYSIOTHERAPY,
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
  // Patient Admission to Ward
  {
    id: 'task-009',
    title: 'Check for room availability',
    department: Department.ADMINISTRATION,
  },
  {
    id: 'task-010',
    title: 'Room preparation (water, blanket, pillow, sanitary items)',
    department: Department.HOUSEKEEPING,
  },
  {
    id: 'task-011',
    title: 'Inform nurse of patient arrival to room',
    department: Department.NURSING,
  },
  {
    id: 'task-012',
    title: 'Request porter to bring patient to room',
    department: Department.PORTER,
  },
  {
    id: 'task-013',
    title: 'Perform orientation & assessment checklist (vitals, skin check, fall risk)',
    department: Department.NURSING,
  },
  {
    id: 'task-014',
    title: 'Meal plan setup (based on allergies, needs)',
    department: Department.DIETARY,
  },

  // Post-Operative Transfer from OT
  {
    id: 'task-015',
    title: 'Immediate post-op vitals and neuro observations',
    department: Department.NURSING,
  },
  {
    id: 'task-016',
    title: 'Pain assessment & documentation',
    department: Department.NURSING,
  },
  {
    id: 'task-017',
    title: 'Surgical wound care plan task',
    department: Department.NURSING,
  },
  {
    id: 'task-018',
    title: 'Resume/initiate post-op medications',
    department: Department.PHARMACY,
  },
  {
    id: 'task-019',
    title: 'Doctor review and write progress notes',
    department: Department.DOCTOR,
  },
  {
    id: 'task-020',
    title: 'Resume feeding order based on NPO status',
    department: Department.DIETARY,
  },

  // Deterioration During Night Shift
  {
    id: 'task-021',
    title: 'Escalation checklist triggered after trend detection',
    department: Department.NURSING,
  },
  {
    id: 'task-022',
    title: 'Team Lead review patient',
    department: Department.TEAM_LEAD,
  },
  {
    id: 'task-023',
    title: 'Doctor notified with vital trends and SBAR',
    department: Department.DOCTOR,
  },
  {
    id: 'task-024',
    title: 'ICU Nurse pre-alert for preparation/standby',
    department: Department.ICU_NURSING,
  },

  // Discharge Planned
  {
    id: 'task-025',
    title: 'Begin discharge checklist (IV removal, wound education, etc.)',
    department: Department.NURSING,
  },
  {
    id: 'task-026',
    title: 'Reconcile meds and prepare discharge prescriptions',
    department: Department.PHARMACY,
  },
  {
    id: 'task-027',
    title: 'Final mobility check or home exercise plan',
    department: Department.PHYSIOTHERAPY,
  },
  {
    id: 'task-028',
    title: 'Schedule caregiver/family education',
    department: Department.NURSING,
  },
  {
    id: 'task-029',
    title: 'Schedule terminal cleaning',
    department: Department.HOUSEKEEPING,
  },
]

// --- Workflows ---
export const workflows: Workflow[] = [
  // ...existing workflows...
  {
    id: 'workflow-005',
    name: 'Patient Admission to Ward',
    description: 'Triggered when patient is admitted from A&E.',
    tasks: [
      tasks.find((t) => t.id === 'task-009')!,
      tasks.find((t) => t.id === 'task-010')!,
      tasks.find((t) => t.id === 'task-011')!,
      tasks.find((t) => t.id === 'task-012')!,
      tasks.find((t) => t.id === 'task-013')!,
      tasks.find((t) => t.id === 'task-014')!,
    ],
  },
  {
    id: 'workflow-006',
    name: 'Post-Operative Transfer from OT',
    description: 'Triggered when patient arrives in ward after surgery.',
    tasks: [
      tasks.find((t) => t.id === 'task-015')!,
      tasks.find((t) => t.id === 'task-016')!,
      tasks.find((t) => t.id === 'task-017')!,
      tasks.find((t) => t.id === 'task-018')!,
      tasks.find((t) => t.id === 'task-019')!,
      tasks.find((t) => t.id === 'task-020')!,
    ],
  },
  {
    id: 'workflow-007',
    name: 'Deterioration During Night Shift',
    description: 'Triggered when patient vitals gradually worsen over shift.',
    tasks: [
      tasks.find((t) => t.id === 'task-021')!,
      tasks.find((t) => t.id === 'task-022')!,
      tasks.find((t) => t.id === 'task-023')!,
      tasks.find((t) => t.id === 'task-024')!,
    ],
  },
  {
    id: 'workflow-008',
    name: 'Discharge Planned',
    description: 'Triggered when doctor confirms patient can be discharged.',
    tasks: [
      tasks.find((t) => t.id === 'task-025')!,
      tasks.find((t) => t.id === 'task-026')!,
      tasks.find((t) => t.id === 'task-027')!,
      tasks.find((t) => t.id === 'task-028')!,
      tasks.find((t) => t.id === 'task-029')!,
    ],
  },
]

// --- Journeys (current task + assigned staff) ---
export const journeys: Journey[] = [
  // Journeys
]
