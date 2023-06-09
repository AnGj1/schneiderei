/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  if (await User.count() > 0) {
     return;
  }
  
  await User.createEach([
    { emailAddress: 'a.gjosheva@yahoo.de', fullName: 'Angela Gjosheva', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('1234') },
    { emailAddress: 'fk.iebn@gmail.com', fullName: 'Feride Kayapinar', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('4321') },
    
  ])
};