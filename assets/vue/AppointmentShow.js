export default {
    data() {
      return {
        appointment: [],
      };
    },
    mounted() {
      this.fetchAppointments();
    },
    methods: {
      fetchAppointments() {
        fetch('/termin')
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Fehler beim Abrufen der Termine 2');
            }
          })
          .then((data) => {
            this.appointment = data;
          })
          .catch((error) => {
            console.error('Fehler beim Server-Request', error);
          });
      },
    },

    template: `
    <div class="container">
    <h1 class="mt-4">Termine</h1>

    <ul class="list-group">
      <li class="list-group-item" v-for="appointment in appointments" :key="appointment.id">
        <div class="d-flex justify-content-between">
          <span>{{ appointment.name }}</span>
          <span>{{ appointment.date }} {{ appointment.time }}</span>
          <span>{{ appointment.description }}</span>
        </div>
      </li>
    </ul>
  </div>`
  };

