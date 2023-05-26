module.exports = {


  friendlyName: 'View appointment',


  description: 'Display create appointment ',


  exits: {

    success: {
      viewTemplatePath: 'pages/appointment/appointmentview'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
