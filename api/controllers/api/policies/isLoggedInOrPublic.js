module.exports = async function(req, res, next) {
    // Überprüfen Sie hier, ob der Benutzer angemeldet ist
    // Beispiel: Überprüfen Sie den Sitzungsstatus oder andere Authentifizierungsmechanismen
  
    if (req.me) {
      return next(); // Erlauben Sie den Zugriff auf die Route
    } else {
      // Der Benutzer ist nicht angemeldet, fahren Sie mit dem nächsten Schritt fort
      // und implementieren Sie hier die Logik für den öffentlichen Zugriff
      // Beispiel: Überprüfen Sie, ob die Route öffentlich zugänglich sein sollte
  
      if (!req.me) {
        return next(); // Erlauben Sie den Zugriff auf die Route
      } else {
        return res.forbidden(); // Verweigern Sie den Zugriff auf die Route
      }
    }
  };
  