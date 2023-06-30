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
    
  

    showAll: async function (req, res) {
      try {
    
        const appointments = await Appointment.find();
  
        return res.view('pages/appointment/show', { appointments });
      } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Fehler beim Abrufen der Termine' });
      }
    },

    edit: async function (req, res) {
      try {
        const appointments = await Appointment.find();
        return res.view('pages/appointment/edit', { appointments });
        
      } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Fehler beim Bearbeiten des Termins' });
      }
    },

    editOne: async function (req, res) {
      try {
      
        const { id } = req.params;
    
        // Suchen Sie den Termin in der Datenbank
        const appointment = await Appointment.findOne({ id });
    
        if (!appointment) {
          return res.status(404).send({ error: 'Termin nicht gefunden' });
        }
    
        return res.view('pages/appointment/update', { appointment });
      } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Fehler beim Bearbeiten des Termins' });
      }
    },

    update: async function (req, res) {
      try {
        const { id } = req.params;
        const { date, time } = req.body;
    
        // Aktualisieren Sie den Termin in der Datenbank
        await Appointment.update({ id }).set({ date, time });
    
        return res.redirect('/appointment/show');
      } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Fehler beim Aktualisieren des Termins' });
      }
    },

    showDeleteConfirmation: async function (req, res) {
      try {
        const { id } = req.params;
    
        // Suchen Sie den Termin in der Datenbank
        const appointment = await Appointment.findOne({ id });
    
        if (!appointment) {
          return res.status(404).send({ error: 'Termin nicht gefunden' });
        }
    
        return res.view('pages/appointment/delete', { appointment });
      } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Fehler beim Anzeigen der Löschbestätigung' });
      }
    },
    
    delete: async function (req, res) {
      try {
        const { id } = req.params;
    
        // Suchen Sie den Termin in der Datenbank
        const appointment = await Appointment.findOne({ id });
    
        if (!appointment) {
          return res.status(404).send({ error: 'Termin nicht gefunden' });
        }
    
        // Löschen Sie den Termin aus der Datenbank
        await Appointment.destroy({ id });
    
        return res.redirect('/appointment/show');
      } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Fehler beim Löschen des Termins' });
      }
    },

    
  };
