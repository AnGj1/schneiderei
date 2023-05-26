
module.exports = {

   
    create: async function (req, res) {
        sails.log.debug("Create appointment....")
        let params = req.allParams();
        sails.log.debug(params); // log the received params
        await Appointment.create(params);
        res.redirect('/confirmation');
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
  
  
    read: async function (req, res) {
      try {
        const userId = req.session.userId; 
        const appointment = await Appointment.find({ user: userId });
        return res.json(appointment);
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
  