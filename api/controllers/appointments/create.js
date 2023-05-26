odule.exports = {


    friendlyName: 'Create appointment',


    description: 'Create Appointment',


    inputs: {
        action: {
            description: 'What should be done',
            type: 'string',
            required: true
        },
        date: {
            description: 'The date of the appointment',
            type: 'string',
            required: true
        },
        time: {
            description: 'The time of the appointment',
            type: 'string',
            required: true
        },
    },


    exits: {

    },


    fn: async function (inputs) {
        console.log("Create an appointment..");
        this.req.session.appointment = { 
            "action":inputs.action,
            "date":inputs.date,
            "time": inputs.time
        }
        
        return;

    }


};