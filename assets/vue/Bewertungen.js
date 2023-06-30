export default {
    data() {
      return {
        name: '',
        stars: 0,
        comment: '',
        reviews: [],
        successMessage: false,
        selectedReview: null,
        bewertungen: []
      }
    },
    mounted() {
      this.fetchReviews();
    },
    methods: {
        editReview(review) {
            // Öffne ein Dialogfenster oder Navigiere zu einer Bearbeitungsseite mit den Details der ausgewählten Bewertung
            console.log('Bewertung bearbeiten:', review);
          },
          deleteReview(review) {
            // Sende eine DELETE-Anfrage an den Server, um die Bewertung zu löschen
            console.log('Bewertung löschen:', review);
          },
      setRating(stars) {
        if (this.stars === stars) {
          this.stars = 0;
        } else {
          this.stars = stars;
        }
      },
      submitReview() {
        const newReview = {
          name: this.name,
          stars: this.stars,
          comment: this.comment,
        };
  
        fetch('/bewertungen/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newReview),
        })
          .then(response => {
            if (response.ok) {
              this.name = '';
              this.comment = '';
              this.stars = 0;
              this.fetchReviews();
              this.successMessage = true;
              setTimeout(() => {
                this.successMessage = false;
              }, 3000);
            } else {
              console.error('Fehler beim Hinzufügen der Bewertung');
            }
          })
          .catch(error => {
            console.error(error);
          });
      },
      fetchReviews() {
        fetch('/bewertungen')
          .then(response => response.json())
          .then(data => {
            this.reviews = data;
            this.selectedReview = data[0]; // Annahme: Die erste Bewertung wird als ausgewählte Bewertung festgelegt
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
    template: `
  <div>
    <h1>Kundenbewertung abgeben</h1>

    <form @submit.prevent="submitReview">
      <label for="name">Name: {{ name }}</label>
      <input type="text" id="name" v-model="name">

      <label for="stars">Bewertung:</label>
      <div class="stars">
        <span @click="setRating(1)" :class="{ 'star-filled': stars >= 1 }"></span>
        <span @click="setRating(2)" :class="{ 'star-filled': stars >= 2 }"></span>
        <span @click="setRating(3)" :class="{ 'star-filled': stars >= 3 }"></span>
        <span @click="setRating(4)" :class="{ 'star-filled': stars >= 4 }"></span>
        <span @click="setRating(5)" :class="{ 'star-filled': stars >= 5 }"></span>
      </div><br>

      <label for="comment">Kommentar:</label><br>
      <textarea id="comment" v-model="comment"></textarea><br>

      <button type="submit" class="btn btn-primary">Bewertung abgeben</button>
    </form>

    <div v-if="successMessage" class="alert alert-success">
      Bewertung erfolgreich abgegeben.
    </div>

    <ul id="bewertungsList">
      <li v-for="bewertungen in bewertungen" :key="bewertungen.id" class="Bewertungen">
        <div class="bewertungsContent">
          <h4>{{ bewertungen.name }}</h4>
          <p class="comment">Kommentar: {{ bewertungen.comment }}</p>
          <p class="stars">Bewertung: {{ bewertungen.stars }}/5 Sterne</p>
        </div>
      </li>
    </ul>

    <!-- Bewertungen-Liste -->
    <ul>
      <li v-for="review in reviews" :key="review.id" @click="selectedReview = review" :class="{ 'selected': selectedReview === review }">
        <p>{{ review.name }}</p>
        <p>{{ review.comment }}</p>
        <p>{{ review.stars }}/5 Sterne</p>
      </li>
    </ul>

    <!-- Ausgewählte Bewertung -->
    <div v-if="selectedReview">
      <h2>Ausgewählte Bewertung</h2>
      <p>{{ selectedReview.name }}</p>
      <p>{{ selectedReview.comment }}</p>
      <p>{{ selectedReview.stars }}/5 Sterne</p>

      <!-- Optionen zum Bearbeiten und Löschen -->
      <button @click="editReview(selectedReview)">Bearbeiten</button>
      <button @click="deleteReview(selectedReview)">Löschen</button>
    </div>
  </div>
`,

  };
  