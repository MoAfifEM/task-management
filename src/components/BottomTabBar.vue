<template>
  <nav class="navbar navbar-light bg-light tabbar">
    <div class="container-fluid p-0">
      <ul class="navbar-nav flex-row w-100 justify-content-around align-items-center">
        <!-- <li class="nav-item flex-fill text-center back-btn-li">
          <button class="btn btn-link nav-link back-btn" @click="$router.back()" aria-label="Back">
            <i class="pi pi-arrow-left"></i>
          </button>
        </li> -->
        <li class="nav-item flex-fill text-center">
          <router-link to="/v2/patients" class="nav-link" active-class="active">
            <i class="pi pi-home"></i>
            <div style="font-size: 0.8em">Patients</div>
          </router-link>
        </li>
        <li class="nav-item flex-fill text-center">
          <router-link to="/v2/tasks" class="nav-link" active-class="active">
            <i class="pi pi-list"></i>
            <div style="font-size: 0.8em">Tasks</div>
          </router-link>
        </li>
        <li class="nav-item flex-fill text-center">
          <router-link to="/login" class="nav-link" active-class="active">
            <i class="pi pi-user"></i>
            <div style="font-size: 0.8em">Logout</div>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
// No script logic needed for this component
</script>

<style scoped>
.tabbar {
  position: fixed;
  bottom: 0; /* Changed from top: 0 to bottom: 0 */
  left: 0;
  right: 0;
  border-top: 1px solid #dee2e6; /* Changed from border-bottom */
  border-bottom: none;
  z-index: 1050;
}

@media (min-width: 1300px) {
  .tabbar {
    display: none !important;
  }
}

.nav-link {
  padding: 0.5rem 0 0.2rem 0;
  font-size: 1.1em;
  color: #495057;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-link.active {
  font-weight: bold;
  color: #007bff !important;
}

/* Style for back button */
.back-btn-li {
  max-width: 60px;
  flex: 0 0 60px 0;
}
.back-btn {
  padding: 0.5rem 15px;
  font-size: 1.3em;
  color: #495057;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.back-btn:focus {
  outline: none;
  box-shadow: none;
}
</style>
