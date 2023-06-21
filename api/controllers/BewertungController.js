// BewertungController.js

module.exports = {
  index: async function(req, res) {
    try {
      const bewertungen = await Bewertungen.find();
      return res.view('pages/bewertungen/create', { bewertungen });
    } catch (error) {
      console.error(error);
      return res.serverError();
    }
  },


  create: async function (req, res) {
    try {
      const { name, rating, comment } = req.body;
      const newReview = await Bewertungen.create({ name, rating, comment }).fetch();

      // Erfolgreiche Bewertung
      return res.status(201).send(newReview);
    } catch (error) {
      console.error(error);
      // Fehler beim Hinzufügen der Bewertung
      return res.status(500).send({ error: 'Fehler beim Hinzufügen der Bewertung' });
    }
  },
};
