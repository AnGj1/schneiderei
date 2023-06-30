module.exports = {
    attributes: {
      name: { type: 'string', columnType: 'varchar(120)', required: true },
      stars: { type: 'string', columnType: 'varchar(80)', required: true },
      comment: { type: 'string', columnType: 'varchar(255)', required: true }, 
      replies: { type: 'json', columnType: 'json', defaultsTo: [] },
      
    },
  };
  