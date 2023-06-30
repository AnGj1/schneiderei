// BewertungController.js

module.exports = {
  find: async function(req, res) {
    try {
      const bewertungen = await Bewertungen.find();
      return res.view('pages/bewertungen/show', { bewertungen: bewertungen });
    } catch (error) {
      console.error(error);
      return res.serverError();
    }
  },
  index: async function(req, res) {
    try {
      const bewertungen = await Bewertungen.find().sort('createdAt DESC').limit(3);
      return res.view('pages/startpage', { bewertungen: bewertungen });
    } catch (error) {
      console.error(error);
      return res.serverError();
    }
  },
  create: async function (req, res) {
    try {
      const { name, stars, comment } = req.body;
      const newReview = await Bewertungen.create({ name, stars, comment }).fetch();

      // Erfolgreiche Bewertung
      return res.status(201).send(newReview);
    } catch (error) {
      console.error(error);
      // Fehler beim Hinzufügen der Bewertung
      return res.status(500).send({ error: 'Fehler beim Hinzufügen der Bewertung' });
    }
  },
  addReply: async function(req, res) {
  try {
    const { id } = req.params;
    const { replies } = req.body;
    const review = await Bewertungen.findOne({ id });
    if (!review) {
      return res.status(404).send({ error: 'Bewertung nicht gefunden' });
    }
    review.replies.push(replies);
    await Bewertungen.update({ id: review.id }, { replies: review.replies });
    return res.status(200).send(review);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Fehler beim Hinzufügen der Antwort' });
  }
},




};
