module.exports = {
    index: async function(req, res) {
      try {
        // Lade alle Kundenbewertungen aus der Datenbank
        const bewertungen = await Bewertung.find();
  
        // Rendere die Kundenbewertungen-View und gebe die Bewertungen als Daten mit
        return res.view('pages/bewertung', { bewertungen });
      } catch (error) {
        // Gib einen Fehler aus, wenn etwas schief geht
        console.error(error);
        return res.serverError();
      }
    },
  
    create: async function(req, res) {
      try {
        // Erstelle eine neue Bewertung aus den Formular-Daten
        const bewertung = await Bewertung.create({
          name: req.body.name,
          kommentar: req.body.kommentar,
          bewertung: req.body.bewertung
        }).fetch();
  
        // Zeige eine Erfolgsmeldung an und leite zur Index-Seite weiter
        req.addFlash('success', 'Vielen Dank für Ihre Bewertung!');
        return res.redirect('/bewertung');
      } catch (error) {
        // Gib einen Fehler aus, wenn etwas schief geht
        console.error(error);
        req.addFlash('error', 'Es ist ein Fehler aufgetreten.');
        return res.redirect('/bewertung');
      }
    }
  };
  