export default {
    data() {
      return {
        action: '',
        date: '',
        time: '',
        appointment: [],
      };
    },
    created() {
      let url = new URL(window.location.origin + '/appointment');
      fetch(url)
        .then(res => res.json())
        .then(data => this.appointment = data);
    },
    methods: {
      saveAppointment() {
        const data = {
          action: this.action,
          date: this.date,
          time: this.time
        };
  
        let url = new URL(window.location.origin + '/appointment');
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then((result) => {
          return result.json();
        })
        .then(data => {
          this.appointment.push(data);
          this.action = '';
          this.data = '';
          this.time = '';
        });
      },
    },
    template: `
      <div class="container">
        <h1 class="mt-4">Terminverwaltung</h1>
  
        <form @submit.prevent="saveAppointment" class="my-4">
          <div>
            <label for="action">Aktion:</label>
            <select id="action" v-model="action">
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
  
          <button type="submit" class="btn btn-primary">Termin speichern</button>
        </form>
  
        <h2>Freie Termine:</h2>
        <ul class="list-group">
          <li class="list-group-item" v-for="appointment in appointment">
            <div class="d-flex justify-content-between">
              <span>Aktion: {{ appointment.action }}</span>
              <span>Datum: {{ appointment.date }}</span>
              <span>Uhrzeit: {{ appointment.time }}</span>
            </div>
          </li>
        </ul>
      </div>
    `,
  };
  