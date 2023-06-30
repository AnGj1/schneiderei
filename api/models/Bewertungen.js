module.exports = {
    attributes: {
      name: { type: 'string', columnType: 'varchar(120)', required: false },
      stars: { type: 'string', columnType: 'varchar(80)' },
      comment: { type: 'string', columnType: 'varchar(255)', required: false }, 
      replies: { type: 'json', columnType: 'json', defaultsTo: [] },
      
    },
  };
  