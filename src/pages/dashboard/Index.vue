<template>
  <div class="container-fluid">
    <div class="row g-3">
      <!-- Welcome message -->
      <div class="col-12">
        <div class="alert alert-primary" role="alert">
          <h4 class="alert-heading">Welcome, Nurse!</h4>
          <p>Here's a quick overview of today's tasks.</p>
        </div>
      </div>

      <!-- Stats cards -->
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card text-bg-light shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Total Patients</h5>
            <p class="card-text display-6">23</p>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <div class="card text-bg-light shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Pending Tasks</h5>
            <p class="card-text display-6">8</p>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <div class="card text-bg-light shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Staff On Duty</h5>
            <p class="card-text display-6">5</p>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <div class="card text-bg-light shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Appointments Today</h5>
            <p class="card-text display-6">12</p>
          </div>
        </div>
      </div>

      <!-- Recent activity -->
      <div class="col-12 mt-3">
        <div class="card shadow-sm">
          <div class="card-header">
            <strong>Recent Activity</strong>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Checked vitals for Patient #1021</li>
            <li class="list-group-item">Medication administered to Patient #1003</li>
            <li class="list-group-item">New patient registered: Mr. Tan</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No data yet — static content for now
</script>
