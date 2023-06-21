// Employee.js

module.exports = {
    attributes: {
      firstName: {
        type: 'string',
        required: true,
        maxLength: 200,
        example: 'John'
      },
  
      lastName: {
        type: 'string',
        required: true,
        maxLength: 200,
        example: 'Doe'
      },
  
      position: {
        type: 'string',
        required: true,
        maxLength: 200,
        example: 'Manager'
      },
  
      user: {
        model: 'user'
      }
    }
  };
  