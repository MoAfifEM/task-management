<template>
  <PageContainer>
    <div class="patient-list-scroll">
      <div class="card patient-card border-bottom" v-for="patient in data" :key="patient.id">
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
      </div>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
import type { Patient } from '@/types/models'
import { patients } from '../../../data/mockData'
import { ref } from 'vue'
import PageContainer from '@/components/v2/PageContainer.vue'

const data = ref<Patient[]>(patients)
// const defaultAvatar = 'https://ui-avatars.com/api/?name=Patient&background=dee2e6&color=495057'
const defaultAvatar =
  'https://cdna.artstation.com/p/assets/images/images/038/652/346/large/joe-parente-joji-pink-guy-comp-01.jpg?1623691200'
</script>

<style scoped>
.patient-list-scroll {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.patient-card {
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-top: none;
  margin: 0 5px;
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
