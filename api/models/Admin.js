module.exports = {
    attributes: {
        
        email: { type: 'string', columnType: 'varchar(80)',  required: false, unique: true },
        adminName:  {type: 'string', columnType: 'varchar(80)'},

        pricelists: {
            collection: 'pricelist',
            via: 'admin'
          }
      },
};