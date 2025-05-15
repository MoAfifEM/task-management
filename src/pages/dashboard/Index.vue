<template>
  <div>
    <!-- <header class="bg-warning text-white p-1 text-center">
      <h1 class="display-3">Dashboard</h1>
      <p class="lead text-center">Encoremed</p>
    </header> -->

    <main class="flex-grow-1 p-5 container-fluid dashboard-container">
      <!-- Recent activity -->
      <div class="recent-activity row justify-content-center mb-4">
        <div class="col-12">
          <div class="card shadow-sm">
            <div class="card-header d-flex justify-content-between align-items-center">
              <strong>Recent Activity</strong>
              <div class="spinner-grow spinner-grow-sm text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li
                v-for="(activity, index) in activities.slice(0, 3)"
                :key="index"
                class="list-group-item"
              >
                {{ activity }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Stats cards -->
      <div class="stats-card row justify-content-center mb-4">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card text-center p-4">
            <h2>Patients</h2>
            <p>23</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card text-center p-4">
            <h2>Staff On Duty</h2>
            <p>Details about Card 2</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card text-center p-4">
            <h2>Workflows</h2>
            <p>4</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card text-center p-4">
            <h2>Departments</h2>
            <p>10</p>
          </div>
        </div>
      </div>

      <!-- Patient Current Status -->
      <div class="patient-status container-fluid py-4">
        <h2 class="mb-4">Patient Current Status</h2>

        <!-- Scrollable Patient Status Container -->
        <div class="status-container overflow-auto" style="max-height: 70vh">
          <div class="row g-4">
            <!-- Iterate over all patients -->
            <div
              class="col-12 col-sm-6 col-md-4 col-lg-3"
              v-for="(patient, index) in patients"
              :key="index"
            >
              <div class="status-card p-3 border rounded shadow-sm">
                <h5 class="status-title mb-3">{{ patient.name }} - {{ patient.status }}</h5>

                <!-- Show only the last task -->
                <div class="task-card p-3 border rounded shadow-sm" v-if="patient.tasks.length > 0">
                  <h6 class="task-title mb-2">
                    {{ patient.tasks[patient.tasks.length - 1].title }}
                  </h6>
                  <p class="text-muted mb-1">
                    Task ID: {{ patient.tasks[patient.tasks.length - 1].id }}
                  </p>
                  <p class="text-muted mb-1">
                    Handled By: {{ patient.tasks[patient.tasks.length - 1].staffName }}
                  </p>
                  <p class="text-muted mb-1">
                    Created At: {{ patient.tasks[patient.tasks.length - 1].createdAt }}
                  </p>
                  <span
                    class="badge"
                    :class="{
                      'bg-success': patient.tasks[patient.tasks.length - 1].status === 'DONE',
                      'bg-warning': patient.tasks[patient.tasks.length - 1].status === 'PENDING',
                      'bg-secondary':
                        patient.tasks[patient.tasks.length - 1].status === 'IN_PROGRESS',
                    }"
                  >
                    {{ patient.tasks[patient.tasks.length - 1].status }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <!-- <footer class="bg-dark text-white text-center p-3">
    <small>&copy; 2025 Encoremed</small>
  </footer> -->
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive array to store activities
const activities = ref([
  'Checked vitals for Patient #1021',
  'Medication administered to Patient #1003',
  'New patient registered: Mr. Tan',
])
// Dummy data for patients and tasks
const patients = ref([
  {
    name: 'Patient #1021',
    status: 'Under Observation',
    tasks: [
      {
        id: 'T001',
        title: 'Vitals Check',
        staffName: 'Nurse Jane',
        createdAt: '2025-05-15 10:00',
        completedAt: '2025-05-15 10:30',
        status: 'DONE',
      },
      {
        id: 'T002',
        title: 'Medication Administration',
        staffName: 'Dr. Smith',
        createdAt: '2025-05-15 11:00',
        status: 'PENDING',
      },
    ],
  },
  {
    name: 'Patient #1003',
    status: 'Medication Administered',
    tasks: [
      {
        id: 'T003',
        title: 'Blood Test',
        staffName: 'Lab Technician',
        createdAt: '2025-05-15 09:00',
        completedAt: '2025-05-15 09:45',
        status: 'DONE',
      },
      {
        id: 'T004',
        title: 'Consultation',
        staffName: 'Dr. Adams',
        createdAt: '2025-05-15 12:00',
        status: 'IN_PROGRESS',
      },
    ],
  },
  {
    name: 'Patient #1045',
    status: 'Scheduled for Surgery',
    tasks: [
      {
        id: 'T005',
        title: 'Pre-Surgery Checkup',
        staffName: 'Dr. Lee',
        createdAt: '2025-05-15 08:00',
        status: 'PENDING',
      },
    ],
  },
  {
    name: 'Patient #1050',
    status: 'Emergency Case',
    tasks: [
      {
        id: 'T006',
        title: 'Emergency Assessment',
        staffName: 'Dr. Brown',
        createdAt: '2025-05-15 07:30',
        status: 'IN_PROGRESS',
      },
    ],
  },
  {
    name: 'Patient #1060',
    status: 'Under Observation',
    tasks: [
      {
        id: 'T007',
        title: 'Vitals Monitoring',
        staffName: 'Nurse Kelly',
        createdAt: '2025-05-15 06:00',
        status: 'DONE',
      },
    ],
  },
  {
    name: 'Patient #1070',
    status: 'Discharged',
    tasks: [
      {
        id: 'T008',
        title: 'Final Consultation',
        staffName: 'Dr. Adams',
        createdAt: '2025-05-14 18:00',
        completedAt: '2025-05-14 18:30',
        status: 'DONE',
      },
    ],
  },
  {
    name: 'Patient #1080',
    status: 'Admitted for Observation',
    tasks: [
      {
        id: 'T009',
        title: 'Initial Assessment',
        staffName: 'Dr. Smith',
        createdAt: '2025-05-15 09:00',
        status: 'PENDING',
      },
    ],
  },
  {
    name: 'Patient #1090',
    status: 'Medication Administered',
    tasks: [
      {
        id: 'T010',
        title: 'Administer Medication',
        staffName: 'Nurse Jane',
        createdAt: '2025-05-15 10:00',
        status: 'DONE',
      },
    ],
  },
  {
    name: 'Patient #1100',
    status: 'Undergoing Tests',
    tasks: [
      {
        id: 'T011',
        title: 'Blood Test',
        staffName: 'Lab Technician',
        createdAt: '2025-05-15 11:00',
        status: 'IN_PROGRESS',
      },
    ],
  },
  {
    name: 'Patient #1110',
    status: 'Awaiting Results',
    tasks: [
      {
        id: 'T012',
        title: 'MRI Scan',
        staffName: 'Radiologist',
        createdAt: '2025-05-15 12:00',
        status: 'PENDING',
      },
    ],
  },
])

// Function to add dummy activity data periodically
const addDummyActivity = () => {
  const dummyData = [
    'Patient #1045 scheduled for surgery',
    'New staff member added: Dr. Smith',
    'Lab results uploaded for Patient #1007',
    'Patient #1023 discharged',
    'Emergency case admitted: Patient #1050',
  ]

  setInterval(() => {
    const randomActivity = dummyData[Math.floor(Math.random() * dummyData.length)]
    activities.value.unshift(randomActivity) // Add new activity to the top
    if (activities.value.length > 10) {
      activities.value.pop() // Limit the list to 10 items
    }
  }, 5000) // Update every 5 seconds
}

// Start adding dummy activities when the component is mounted
onMounted(() => {
  addDummyActivity()
})
</script>

<style scoped>
h1 {
  margin: 0;
}

p {
  color: #333;
}

main {
  background-color: #f8f9fa;
}

.card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

footer {
  border-top: 1px solid #444;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}
</style>
