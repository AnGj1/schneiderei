module.exports = {
    attributes: {
        email: { type: 'string', columnType: 'varchar(80)',  required: true, unique: true },
        nachnahme:  {type: 'string', columnType: 'varchar(80)'},
        name: { type: 'string', columnType: 'varchar(80)' },
        telefon: { type: 'string', columnType: 'varchar(15)' },
        passwort: { type: 'string', columnType: 'varchar(80)', required: true, encrypt: true},
        benutzerName: { type: 'string', columnType: 'varchar(80)' },

    },
};