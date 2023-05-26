module.exports = {


    friendlyName: 'delete',


    description: 'Delete appointment.',


    inputs: {

    },


    exits: {

    },


    fn: async function (inputs) {
        this.req.session.appointment = {};
        return;
      }


};