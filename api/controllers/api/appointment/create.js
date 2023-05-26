module.exports = {
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
    exits: {},
   
  };
  