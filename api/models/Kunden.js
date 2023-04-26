module.exports = {
    attributes: {
        id: { type: 'number', autoIncrement: true },
        email: { type: 'string', columnType: 'varchar(80)',  required: false, unique: true },
        nachnahme:  {type: 'string', columnType: 'varchar(80)'},
        name: { type: 'string', columnType: 'varchar(80)' },
        telefon: { type: 'string', columnType: 'varchar(15)' },
        passwort: { type: 'string', columnType: 'varchar(80)', required: false, encrypt: true},
        benutzerName: { type: 'string', columnType: 'varchar(80)' },
   
      },
};