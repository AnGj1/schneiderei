module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true,
    },

    date: {
      type: 'ref', columnType: 'datetime', required: true
    },

    time: {
      type: 'string',
      columnType: 'time',
      required: true,
    },

    description: {
      type: 'string',
      required: true,
    },

    user: { 
      model: 'user',
    },
  },
};
