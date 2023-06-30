module.exports = {
    attributes: {
      name: { type: 'string', columnType: 'varchar(80)', required: false },
      stars: { type: 'string', columnType: 'varchar(80)' },
      comment: { type: 'string', columnType: 'varchar(80)', required: false }, 
      replies: { type: 'json', columnType: 'json', defaultsTo: [] },
      userId: { type: 'number', columnType: 'int', required: true }
    },
  };
  