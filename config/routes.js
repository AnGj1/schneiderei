/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const { create } = require("sails-mysql");
const AppointmentController = require("../api/controllers/AppointmentController");

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

//'get /updatePassword':{view: 'account/update-password'},


  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/startpage' },
  'GET /': { controller: 'BewertungController', action: 'index' },
  'GET /prices': { controller: 'PricelistController', action: 'find'},
  

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

  'GET /bewertungen': { view: 'pages/bewertungen/create' },
  'POST /bewertungen/create': { controller: 'BewertungController', action: 'create' },
  'GET /bewertungen/show': { controller: 'BewertungController', action: 'find' },
  'POST /bewertungen/:id/addReply': 'BewertungController.addReply',


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
  'GET /preise':'PricelistController.show', 


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
  
 
    'GET /appointment': { view: 'pages/appointment' },
    'POST /appointment/create': 'AppointmentController.create',
    'POST /appointment/create': { controller: 'AppointmentController', action: 'create' }, 
    'GET /appointment/show': 'AppointmentController.showAll',

    'GET /appointment/edit': 'AppointmentController.edit',
    'GET /appointment/:id/edit': 'AppointmentController.editOne',
    'POST /appointment/:id/update': 'AppointmentController.update',
    'GET /appointment/delete': 'AppointmentController.showDeleteConfirmation',
    'POST /appointment/:id/delete': 'AppointmentController.delete',
    'GET /appointment/meinAppointment': 'meinTerminController.show',


    'GET /api/create' : {controller: 'AppointmentController', action: 'create'},
    'POST /api/create': {controller: 'AppointmentController', action: 'create'},

    'GET /gallery': {view: 'pages/gallery'},
    'GET /faq' :   {view: 'pages/faq'}, 
    '/bestaetigung': { view: 'pages/bestaetigung' },




  };
  
  


