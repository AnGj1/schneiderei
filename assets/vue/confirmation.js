export default {
    data() {
    },
    created() {
      let url = new URL(origin + '/order/new');
      fetch(url)
        .then(res => res.json());
    },
    methods: {
    
      },
    template: `
      <div class="container h2 my-10 d-flex justify-content-center" style="height: 500px;">
      <div class="d-flex justify-content-center">
        termin erfolgreich erstellt
        </div>
      </div>
        `,
  };
  