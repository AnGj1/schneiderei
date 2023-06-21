export default {
  props: ['date'],
  data() {
    return {
      name: '',
      date: '',
      time: '',
      description: '',

      appointments: [],
    };
  },
  mounted() {
    this.fetchAppointments();
  },
  methods: {

    createAppointment: function() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("date", this.date);
      formData.append("time", this.time);
      formData.append("description", this.description);
    
      fetch("/appointment/create", {
        method: "POST",
        body: formData
      })
        .then(response => {
          if (response.ok) {
            // Termin erfolgreich erstellt
            const createdDateTime = `${this.date} ${this.time}`;
            alert(`Ihr Termin wurde am ${createdDateTime} erstellt`);
            window.location.href= "/bestaetigung"
            // Hier kannst du weitere Aktionen ausführen, z.B. Aktualisierung der Terminliste
          } else {
            // Fehler beim Erstellen des Termins
            console.error("Fehler beim Erstellen des Termins");
          }
        })
        .catch(error => {
          console.error("Fehler beim Server-Request", error);
        });
    },
    
  },
  
    deleteAppointment(id) {
      fetch(`/appointment/${id}/delete`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            this.fetchAppointments();
          } else {
            console.error(`Fehler beim Löschen des Termins mit der ID ${id}`);
          }
        })
        .catch((error) => {
          console.error('Fehler beim Server-Request', error);
        });
    },
    fetchAppointments() {
      fetch('/appointment/index')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Fehler beim Abrufen der Termine');
          }
        })
        .then((data) => {
          this.appointments = data;
        })
        .catch((error) => {
          console.error('Fehler beim Server-Request', error);
        });
    },
    resetForm() {
      this.name = '';
      this.date = '';
      this.time = '';
      this.description = '';
    },
    validateTime() {
      const selectedTime = new Date(`2000-01-01T${this.time}`);
      const minTime = new Date(`2000-01-01T07:00`);
      const maxTime = new Date(`2000-01-01T18:00`);
    
      if (selectedTime < minTime || selectedTime > maxTime || selectedTime.getMinutes() !== 0) {
        // Die ausgewählte Uhrzeit liegt außerhalb des gültigen Bereichs oder enthält Minuten
        // Hier kannst du eine Fehlermeldung anzeigen oder andere Aktionen durchführen
      }
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
          <h10>Wählen Sie eine Uhrzeit zwischen 07:00 und 18:00 Uhr</h10>
          <input type="time" id="time" v-model="time" @input="validateTime">
        </div>
        <div>
          <label for="description">Beschreibung:</label>
          <input type="text" id="description" v-model="description">
        </div>

        <button type="submit" class="btn btn-primary">Termin speichern</button>
      </form>

    </div>
  `,
};
