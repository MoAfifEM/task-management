<template>
  <div class="v2-page-container">
    <div v-if="title" class="v2-page-header">
      <h4 class="mb-3 mt-3">{{ title }}</h4>
    </div>
    <div class="v2-page-scroll">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<style scoped>
.v2-page-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 56px; /* Leave space for the bottom tab bar */
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.v2-page-header {
  color: white;
  padding: 16px 24px 0 24px;
  background: #2a5f95;
  z-index: 2;
  border-bottom: 2px red solid;
}

.v2-page-scroll {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>
