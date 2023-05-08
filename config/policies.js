/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */
<<<<<<< HEAD
//sage wer was tun kann 
=======

>>>>>>> 6b7be9cbed565141314ef2806e0dc59deea860a2
module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

<<<<<<< HEAD
  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,

  MenuController: {
    '*': true,
  },

  MealController: {
    '*': 'is-super-admin',
  },
  CategoryController: {
    '*': 'is-super-admin',
  }
=======
  // '*': true,

>>>>>>> 6b7be9cbed565141314ef2806e0dc59deea860a2
};
