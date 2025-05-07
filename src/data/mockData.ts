import type { Staff, Patient, Task } from '@/types/models'
import { TaskStatus } from '@/types/enums'

export const staffs: Staff[] = [
  {
    id: '1',
    username: 'nurse.anna',
    password: 'admin123',
    name: 'Anna Lim',
    contactNo: '012-3456789',
  },
  {
    id: '2',
    username: 'nurse.john',
    password: 'admin123',
    name: 'John Lee',
    contactNo: '011-9876543',
  },
]

export const patients: Patient[] = [
  {
    id: '101',
    fullName: 'Ahmad Kamal',
    identityNo: '800512-10-1234',
    birthDate: '1980-05-12',
    contactNo: '013-4567890',
    address: '123 Jalan Merdeka, Kuala Lumpur',
  },
  {
    id: '102',
    fullName: 'Sarah Tan',
    identityNo: '921130-08-5678',
    birthDate: '1992-11-30',
    contactNo: '014-9876543',
    address: '456 Jalan Ampang, Selangor',
  },
  {
    id: '103',
    fullName: 'Lim Wei Ming',
    identityNo: '750719-05-4321',
    birthDate: '1975-07-19',
    contactNo: '012-3456789',
    address: '789 Jalan Tun Razak, Penang',
  },
]

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Administer Medication',
    description: 'Administer prescribed medication to Patient Ahmad Kamal.',
    patientId: '101',
    staffId: '1',
    status: TaskStatus.PENDING,
  },
  {
    id: '2',
    title: 'Routine Checkup',
    description: 'Perform routine checkup for Patient Sarah Tan.',
    patientId: '102',
    staffId: '2',
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: '3',
    title: 'Update Patient Records',
    description: 'Update medical records for Patient Lim Wei Ming.',
    patientId: '103',
    staffId: '1',
    status: TaskStatus.DONE,
  },
]
