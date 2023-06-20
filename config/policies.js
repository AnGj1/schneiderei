/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */
//sage wer was tun kann 
module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'PricelistController/show': true,
  

  KundendatenController: {
    '*': true,
  },

  DuyController: {
    '*': 'is-super-admin',
  },
  CategoryController: {
    '*': 'is-super-admin',
  }, 
  PricelistController:{
    'create':'is-super-admin',
    'new': 'is-super-admin', 
    'find': true,
    'findOne': 'is-super-admin' ,
    'editOne': 'is-super-admin',
    'destroyOne':'is-super-admin',
    'updateOne':'is-super-admin',
    'show':true

  }

  
};
