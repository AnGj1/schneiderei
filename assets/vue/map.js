export default {
    methods: {
    
    },
  
    template: `
    <div class="container">
    <h1 class="mt-4">Kontakt</h1>
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control rounded-0" id="name" required>
          </div>
          <div class="form-group">
            <label for="email">E-Mail-Adresse:</label>
            <input type="email" class="form-control rounded-0" id="email" required>
          </div>
          <div class="form-group">
            <label for="subject">Betreff:</label>
            <input type="text" class="form-control rounded-0" id="subject" required>
          </div>
          <div class="form-group">
            <label for="message">Nachricht:</label>
            <textarea class="form-control rounded-0" id="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Nachricht senden</button>
        </form>
      </div>
      <div class="col-md-6">
        <h4 class="text-primary">Kontaktdaten:</h4>
        <p class="text-left">Telefon: +49 7531 2844611</p>
        <p class="text-left">E-Mail: info@schneiderei.de</p>
        <p class="text-left">Adresse: Alfred-Wachtel-Straße 8, 78462 Konstanz</p>
        <h4 class="text-primary">Öffnungszeiten:</h4>
        <p class="text-left">Montag - Freitag: 9:00 - 18:30 Uhr</p>
        <p class="text-left">Samstag: 09:00 - 18:00 Uhr</p>
        <h4 class="text-primary">Folgen Sie uns:</h4>
        <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com"><i class="fab fa-facebook"></i></a>
      </div>
    </div>
  </div>
  
    `
  };

 
  
  