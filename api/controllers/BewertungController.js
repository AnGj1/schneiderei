module.exports = {
  index: async function (req, res) {
    try {
      const bewertungen = await Bewertungen.find();
      return res.view('bewertungen', { bewertungen });
    } catch (error) {
      console.error(error);
      return res.serverError();
    }
  },

  create: async function (req, res) {
    try {
      const bewertung = await Bewertungen.create({
        name: req.body.name,
        stars: req.body.stars,
        comment: req.body.comment,
      }).fetch();

      req.addFlash('success', 'Vielen Dank für Ihre Bewertung!');
      return res.redirect('/bewertungen');
    } catch (error) {
      console.error(error);
      req.addFlash('error', 'Es ist ein Fehler aufgetreten.');
      return res.redirect('/bewertungen');
    }
  },
};
