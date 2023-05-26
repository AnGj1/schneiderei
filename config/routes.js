/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /login':              { action: 'entrance/view-login' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },

  

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  'GET /logout':                         { action: 'account/logout' },
  'POST  /login':                        { action: 'entrance/login' },
  'POST  /signup':                       { action: 'entrance/signup' },
  'POST  /signup':                       { action: 'entrance/signup' },
  'POST  /updateProfile':                { action: 'account/update-profile' },
  'POST  /updatePassword':               { action: 'account/update-password' },
  'POST  /signup':                       { action: 'entrance/signup' },




  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/startpage' },
  'GET /pricelist': { view: 'pages/pricelist' },
  

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  'GET /admin': { view: 'pages/admin' },
  'GET /bewertung': { view: 'pages/bewertung' },
  'POST /bewertung': { controller: 'BewertungController', action: 'create' },
  'GET /pricelist': { controller: 'PricelistController', action: 'index' },

  'GET /faq': { view: 'pages/faq' },
  'GET /welcome': { view: 'pages/welcome' },
  'GET /datenschutz': { view: 'pages/datenschutz' },
  'GET /contact': { view: 'pages/contact' },

  'POST /pricelist': { controller: 'PricelistController', action: 'create' },
  'GET /pricelist/new': { controller: 'PricelistController', action: 'new' },
  'GET /pricelist/:id': 'PricelistController.findOne',
  'GET /pricelist': 'PricelistController.find',

  'GET /pricelist/:id/edit': { controller: 'PricelistController', action: 'editOne' },
  'POST /pricelist/:id/update': { controller: 'PricelistController', action: 'updateOne' },
  'GET /pricelist/:id/destroy': { controller: 'PricelistController', action: 'destroyOne' },
  'POST /pricelist/create': { controller: 'PricelistController', action: 'create' },
  'GET /pricelist/:id': { controller: 'PricelistController', action: 'findOne' },

  'POST /duy': { controller: 'DuyController', action: 'create' },
  'GET /duy/new': { controller: 'DuyController', action: 'new' }, /*neuen eintrag erstellen */
  'GET /duy/:id': 'DuyController.findOne',
  'GET /duy': 'DuyController.find',

  'GET /duy/:id/edit': { controller: 'DuyController', action: 'editOne' },
  'POST /duy/:id/update': { controller: 'DuyController', action: 'updateOne' },
  'GET /duy/:id/destroy': { controller: 'DuyController', action: 'destroyOne' },

  'GET /category/new': { view: 'pages/category/new' },
  'POST /category': { controller: 'CategoryController', action: 'create' },
  'GET /category/:id/destroy': { controller: 'CategoryController', action: 'destroyOne' },
  'GET /category': { controller: 'CategoryController', action: 'find' },

  'GET /kunden': { view: 'pages/kunden' },
  'GET /kunden': 'KundendatenController.find',
  'POST /kunden': 'KundendatenController.create',
  'GET /kunden/new': { controller: 'KundendatenController', action: 'new' },
  'GET /kunden/:id': 'KundendatenController.findOne',
  'GET /kunden/:id/edit': 'KundendatenController.editOne',
  'POST /kunden/:id/update': 'KundendatenController.updateOne',
  'GET /kunden/:id/destroy': 'KundendatenController.destroyOne',
  
  
    'GET /appointment': { action: 'appointment/view-appointment' },
    'POST /appointment': { action: 'appointment/create' },
    'DELETE /appointment/delete': { action: 'appointment/delete' },
    'GET /appointment/find': { action: 'appointment/find' },
  
  };
  
  


