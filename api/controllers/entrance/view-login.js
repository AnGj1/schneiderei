module.exports = {


  friendlyName: 'View login',


  description: 'Display "Login" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/entrance/login',
    },

    redirect: {
      description: 'The requesting user is already logged in.',
      responseType: 'redirect'
    }

  },


  fn: async function () {
    if (this.req.me) {
      const userRecord = await User.findOne({ id: this.req.me.id });
      if (userRecord) {
        throw { redirect: '/welcome?name=' + encodeURIComponent(userRecord.fullName) };
      } else {
        throw { redirect: '/' };
      }
    }
    return {};
  }
  
  
};