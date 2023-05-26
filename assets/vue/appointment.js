export default {
  data() {
    return {
      name: '',
      date: '',
      time: '',
      description: '',
      appointments: [],
    };
  },
  methods: {
    createAppointment: function () {
      fetch('/appointment', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name: this.name,
              date: this.date,
              time: this.time,
              description: this.description
          }),
      })
          .then(response => response.json())
          .then(appointment => this.appointments.push(appointment));
      
      this.name = '';
      this.date = '';
      this.time = '';
      this.description = '';
    },

    deleteAppointment: function (id) {
      let url = `${window.location.origin}/appointment/${id}/delete`;

      fetch(url, {
          method: 'DELETE',
      })
          .then((result) => {
              if (!result.ok) {
                  throw new Error(`HTTP error! status: ${result.status}`);
              }
              return fetch(`${window.location.origin}/appointment/get`);
          })
          .then(res => res.json())
          .then(data => this.appointments = data)
          .catch(e => console.error('There was an error deleting the appointment:', e));
    },
  },

  created: function () {
    let url = new URL(`${window.location.origin}/appointment/get`);
    fetch(url)
      .then(res => res.json())
      .then(data => this.appointments = data);
  },


    template: `
    <div class="container">
    <h1 class="mt-4">Terminverwaltung</h1>

    <form @submit.prevent="createAppointment" class="my-4">
      <div>
        <label for="action">Aktion:</label>
        <select id="action" v-model="name">
          <option value="">Bitte wählen</option>
          <option value="abmessen">Abmessen (30 Minuten)</option>
          <option value="kuerzen">Kürzen (1 Stunde)</option>
          <option value="individual">Individual (2 Stunden)</option>
        </select>
      </div>

      <div>
        <label for="date">Datum:</label>
        <input type="date" id="date" v-model="date">
      </div>

      <div>
        <label for="time">Uhrzeit:</label>
        <input type="time" id="time" v-model="time">
      </div>

      <div>
        <label for="description">Beschreibung:</label>
        <input type="text" id="description" v-model="description">
      </div>

      <button type="submit" class="btn btn-primary">Termin speichern</button>
    </form>

    <h2>Freie Termine:</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="appointment in appointments">
        <div class="d-flex justify-content-between">
          <span>Aktion: {{ appointment.name }}</span>
          <span>Datum: {{ appointment.date }}</span>
          <span>Uhrzeit: {{ appointment.time }}</span>
          <span>Beschreibung: {{ appointment.description }}</span>
        </div>
      </li>
    </ul>
  </div>

    `,
  };
 