

module.exports = function(req, res, next) {
    // Hier kannst du deine Logik für die Überprüfung der Mitarbeiterberechtigung implementieren
    // Beispiel: Überprüfe, ob der Benutzer die Berechtigung "employee" hat
    if (req.user && req.user.role === 'employee') {
      return next();
    } else {
      return res.forbidden('Access denied');
    }
  };
  