<template>
  <div class="v2-page-container">
    <div class="v2-page-scroll">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for this standard container
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

.v2-page-scroll {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>
