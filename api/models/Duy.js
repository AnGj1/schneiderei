module.exports = {
    attributes: {
        titel: { type: 'string', columnType: 'varchar(80)'},
        shortDescription:  {type: 'string', columnType: 'varchar(200)'},
        description: { type: 'string', columnType: 'varchar(1000)' },
        category: {
            model: 'category'
        },
    },
};