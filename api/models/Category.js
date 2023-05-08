module.exports = {
    attributes: {
        name: {
            type: 'string',  
            columnType: 'varchar(80)',  
            required: true,
        },
       
        duys: {
            collection: 'duy',
            via: 'category'
        }, 
        
       
    }
  };