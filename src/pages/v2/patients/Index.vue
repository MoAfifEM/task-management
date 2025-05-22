<template>
  <PageContainer title="Patients">
    <div class="tab-buttons mt-3 mb-3">
      <button
        class="btn"
        :class="tab === 'list' ? 'btn-primary' : 'btn-outline-primary'"
        @click="tab = 'list'"
      >
        Patient List
      </button>
      <button
        class="btn ms-2"
        :class="tab === 'ward' ? 'btn-primary' : 'btn-outline-primary'"
        @click="tab = 'ward'"
      >
        In Ward
      </button>
    </div>

    <div v-if="tab == 'list'" class="patient-list-scroll">
      <div class="card patient-card border-bottom mb-2" v-for="patient in data" :key="patient.id">
        <div class="card-body py-3 px-3 d-flex align-items-center">
          <!-- Avatar Image as Link -->
          <a :href="`/patients/${patient.id}`" class="avatar-link me-3">
            <img
              :src="(patient as any).avatar || defaultAvatar"
              alt="Avatar"
              class="avatar rounded-circle"
            />
          </a>
          <div>
            <h5 class="card-title mb-1">{{ patient.fullName }}</h5>
            <p class="card-text mb-0 text-muted">Age: {{ patient.birthDate }}</p>
            <p class="card-text mb-0 text-muted">ID: {{ patient.id }}</p>
          </div>
        </div>

        <!-- Workflow Dropdown -->
        <div class="card-footer bg-light">
          <div class="dropdown">
            <button
              class="btn btn-secondary btn-sm dropdown-toggle w-100"
              type="button"
              id="workflowDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ selectedWorkflow ? selectedWorkflow.name : 'Select a Workflow' }}
            </button>
            <ul class="dropdown-menu" aria-labelledby="workflowDropdown">
              <li
                v-for="workflow in workflows"
                :key="workflow.id"
                @click="selectWorkflow(patient, workflow)"
              >
                <button class="dropdown-item">{{ workflow.name }}</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="tab == 'ward'" class="patient-list-scroll">
      <div
        class="card patient-card border-bottom mb-2"
        v-for="patient in wardPatients"
        :key="patient.id"
      >
        <div class="card-body py-3 px-3 d-flex align-items-center">
          <a :href="`/patients/${patient.id}`" class="avatar-link me-3">
            <img
              :src="(patient as any).avatar || defaultAvatar"
              alt="Avatar"
              class="avatar rounded-circle"
            />
          </a>
          <div>
            <h5 class="card-title mb-1">
              <i class="pi pi-user me-2 text-primary"></i>
              {{ patient.fullName }}
            </h5>
            <p class="card-text mb-0 text-muted">Age: {{ patient.birthDate }}</p>
            <p class="card-text mb-0 text-muted">ID: {{ patient.id }}</p>
            <template v-if="getCurrentJourney(patient)">
              <div class="mt-3">
                <span class="badge bg-info fs-7 px-3 py-2 mb-2">{{
                  getCurrentJourney(patient).status
                }}</span>
                <div class="d-flex align-items-center text-secondary mt-2 mb-1">
                  <i
                    :class="getDepartmentIcon(getCurrentJourney(patient).task.department) + ' me-2'"
                  ></i>
                  {{ getCurrentJourney(patient).task.department }}
                </div>
                <div class="mb-1 text-secondary">
                  <span class="fw-bold">in progress:</span>
                  <span>{{ getCurrentJourney(patient).task.title }}</span>
                </div>
              </div>
            </template>
            <template v-else>
              <p class="card-text mb-0 text-warning mt-3">No active task</p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
import type { Journey, Patient, Workflow } from '@/types/models'
import { patients, workflows, journeys, staffs } from '@/data/mockData'
import { computed, ref } from 'vue'
import PageContainer from '@/components/v2/PageContainer.vue'
import { TaskStatus } from '@/types/enums'
import { useRouter } from 'vue-router'

const data = ref<Patient[]>(patients)
const _journeys = ref<Journey[]>(journeys)

const router = useRouter()
const defaultAvatar =
  'https://cdna.artstation.com/p/assets/images/images/038/652/346/large/joe-parente-joji-pink-guy-comp-01.jpg?1623691200'

const selectedWorkflow = ref<Workflow | null>(null)
const tab = ref<'list' | 'ward'>('list')

const wardPatients = computed(() =>
  data.value.filter((patient) => {
    const journey = _journeys.value.find(
      (j) =>
        j.patientId === patient.id &&
        (j.status === TaskStatus.PENDING || j.status === TaskStatus.IN_PROGRESS),
    )
    return !!journey
  }),
)

function getDepartmentIcon(department: string) {
  switch (department) {
    case 'NURSING':
      return 'pi pi-user-plus'
    case 'PHYSIOTHERAPY':
      return 'pi pi-heart'
    case 'RADIOLOGY':
      return 'pi pi-camera'
    case 'CARDIOLOGY':
      return 'pi pi-heart-fill'
    case 'DERMATOLOGY':
      return 'pi pi-star'
    case 'GYNECOLOGY':
      return 'pi pi-users'
    case 'NEUROLOGY':
      return 'pi pi-bolt'
    case 'ORTHOPEDICS':
      return 'pi pi-inbox'
    case 'PEDIATRICS':
      return 'pi pi-user'
    case 'ADMINISTRATION':
      return 'pi pi-briefcase'
    default:
      return 'pi pi-building'
  }
}

function getCurrentJourney(patient: Patient) {
  return _journeys.value
    .filter(
      (j) =>
        j.patientId === patient.id &&
        (j.status === TaskStatus.PENDING || j.status === TaskStatus.IN_PROGRESS),
    )
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0]
}

function selectWorkflow(patient: Patient, workflow: Workflow) {
  // check if patient is already in the journey
  const existingJourney = journeys.find((journey: Journey) => journey.patientId === patient.id)
  if (existingJourney) {
    alert(`Patient ${patient.fullName} is already in the workflow ${workflow.name}`)
    return
  }

  const firstTask = workflow.tasks[0]
  if (firstTask) {
    // select the staff under the same task department
    const staffInDepartment = staffs.filter((staff) => staff.department === firstTask.department)
    // Randomly pick a staff member for the task
    // if (staffInDepartment.length > 0) {
    //   const randomStaff = staffInDepartment[Math.floor(Math.random() * staffInDepartment.length)]
    // }

    const newJourney: Journey = {
      id: `journey-${Date.now()}-${firstTask.id}`,
      patientId: patient.id,
      workflowId: workflow.id,
      status: TaskStatus.PENDING,
      task: firstTask,
      staffId: staffInDepartment[0].id,
      createdAt: new Date().toISOString(),
    }
    journeys.push(newJourney)

    // Emit a custom event for global notification
    window.dispatchEvent(
      new CustomEvent('global-notification', {
        detail: `Assigned ${staffInDepartment[0].name} to "${workflow.name}" for patient "${patient.fullName}"`,
      }),
    )
  } else {
    alert(`Workflow "${workflow.name}" has no tasks.`)
  }

  router.push({ name: 'v2Tasks' })
}
</script>

<style scoped>
.tab-buttons {
  display: flex;
  justify-content: flex-start;
  padding: 0 15px;
}
.tab-buttons .btn {
  flex: 1;
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-top: none;
}
.tab-buttons .btn-primary {
  background-color: #0056b3;
  color: #fff;
}
.tab-buttons .btn-outline-primary {
  background-color: #fff;
  color: #007bff;
  border-color: #0056b3;
}
.tab-buttons .btn-primary:hover,
.tab-buttons .btn-outline-primary:hover {
  background-color: #0056b3;
  color: #fff;
}

.patient-list-scroll {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 5px 15px 30px 15px;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.patient-card {
  border-radius: 0.5rem;
  background: #fff;
}
.avatar-link {
  display: inline-block;
}
.avatar {
  width: 48px;
  height: 48px;
  object-fit: cover;
  background: #dee2e6;
}
</style>
