<template>
    <div class="appointment">
      <h1>Deine Appointment</h1>
      <Appointment />
    </div>
  </template>
  
  <script>
  import Appointment from '../components/Appointment.vue';
  
  export default {
    components: {
      Appointment
    }
  }
  </script>
  
  <style scoped>
  .appointment {
    /* Add styles for the page here */
  }
  </style>
  