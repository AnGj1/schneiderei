module.exports = {

  
   
  create: async function(req, res) {
    try {
      const { name, date, time, description } = req.body;
      const newAppointment = await Appointment.create({ name, date, time, description }).fetch();
      console.log
      ("Test")
      // Weiterleitung zur Bestätigungsseite
      // return res.redirect('/bestaetigung');
  
      // Alternativ können Sie die Antwort mit den erstellten Termininformationen senden
      return res.status(201).send(newAppointment);
    } catch (error) {
      console.error('Fehler beim Hinzufügen des Termins', error);
      return res.status(500).send({ error: 'Fehler beim Hinzufügen des Termins' });
    }
  },
  
  
  
    /*create: async function (req, res) {
      try {
        const userId = req.session.userId;
        const appointment = await Appointment.create({ ...req.body, user: userId }).fetch();
        return res.json(appointment);
      } catch (error) {
        console.error('Error:', error);
        return res.serverError();
      }
    },*/
  
  
    index: async function (req, res) {
      try {
        const userId = req.session.userId; 
        const appointment = await Appointment.find({ user: userId });
        return res.view('pages/termin', { appointment });
      } catch (error) {
        console.error('Error:', error);
        return res.serverError();
      }
    },
    
   
  
    update: async function (req, res) {
      try {
        const updatedStatus = req.body.status === 'true'; // Convert string to boolean
        const appointment = await Appointment.updateOne(req.params.id).set({ status: updatedStatus });
        
        console.log('Updated appointment:', appointment);  // log the updated todo
        
        return res.json(appointment);
      } catch (error) {
        console.error('Error:', error);
        return res.serverError();
      }
  },
  
    delete: async function (req, res) {
      try {
        await Appointment.destroyOne(req.params.id);
        return res.ok();
      } catch (error) {
        console.error('Error:', error);
        return res.serverError();
      }
    }
  
  
  };
