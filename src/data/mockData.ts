import type { Staff, Patient, Task } from '@/types/models'
import { TaskStatus } from '@/types/enums'

export const staffs: Staff[] = [
  {
    id: '1',
    username: 'afif',
    password: 'admin123',
    name: 'afif',
    contactNo: '012-3456789',
  },
  {
    id: '2',
    username: 'nurse.john',
    password: 'admin123',
    name: 'John Lee',
    contactNo: '011-9876543',
  },
  {
    id: '3',
    username: 'nurse.anna',
    password: 'admin123',
    name: 'Anna Lim',
    contactNo: '012-3456789',
  },
  {
    id: '4',
    username: 'Afif',
    password: 'admin',
    name: 'Afif',
    contactNo: '012-3456789',
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
  {
    id: '104',
    fullName: 'Nur Aisyah',
    identityNo: '850101-14-5678',
    birthDate: '1985-01-01',
    contactNo: '016-7890123',
    address: '12 Jalan Bukit Bintang, Kuala Lumpur',
  },
  {
    id: '105',
    fullName: 'Rajesh Kumar',
    identityNo: '900215-07-1234',
    birthDate: '1990-02-15',
    contactNo: '017-6543210',
    address: '34 Jalan Ipoh, Selangor',
  },
  {
    id: '106',
    fullName: 'Emily Wong',
    identityNo: '950630-09-8765',
    birthDate: '1995-06-30',
    contactNo: '018-1234567',
    address: '56 Jalan Gurney, Penang',
  },
  {
    id: '107',
    fullName: 'Mohd Faiz',
    identityNo: '880420-11-4321',
    birthDate: '1988-04-20',
    contactNo: '019-9876543',
    address: '78 Jalan Taman Melati, Kuala Lumpur',
  },
  {
    id: '108',
    fullName: 'Sophia Lim',
    identityNo: '970812-06-5432',
    birthDate: '1997-08-12',
    contactNo: '012-3456789',
    address: '90 Jalan Setiawangsa, Selangor',
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
