<template>
  <div v-if="visible" class="notification-modal-center">
    <div class="modal-content p-4">
      <h5 class="mb-3">Task Assignment</h5>
      <ul class="mb-3 notification-list">
        <li v-for="(msg, idx) in messages" :key="idx">{{ msg }}</li>
      </ul>
      <button type="button" class="btn btn-primary w-100" @click="close">Close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const messages = ref<string[]>([])

function show(msg: string) {
  messages.value.push(msg)
  visible.value = true
}

function close() {
  visible.value = false
  messages.value = []
}

defineExpose({ show })
</script>

<style scoped>
.notification-modal-center {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.3);
}
.modal-content {
  background: #fff;
  color: #222;
  border-radius: 12px;
  min-width: 300px;
  max-width: 90vw;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.15);
}
.notification-list {
  max-height: 200px; /* Adjust as needed */
  overflow-y: auto;
  margin-bottom: 1rem;
  padding-left: 1.2rem;
}
</style>
