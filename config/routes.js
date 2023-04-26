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

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/startpage' },
  'GET /pricelist': { view: 'pages/price'},

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

  
  
  'GET /pricelist/new': { view: 'pages/pricelist/new' },
  'POST /pricelist': { controller: 'PricelistController', action:'create' },
  'GET /pricelist/new': { controller: 'PricelistController', action:'new' },

  'GET /pricelist/show': 'pricelist.findOne',
  'GET /pricelist/:id/edit': { controller: 'PricelistController', action: 'editOne' },
  'POST /pricelist/:id/update': { controller: 'PricelistController', action: 'updateOne' },
  'GET /pricelist/:id/delet': { controller: 'PricelistController', action: 'destroyOne' },
 

  'GET /pricelist': 'PricelistController.find',
  'GET /pricelist/show/:id': 'pricelist.findOne',
  'GET /pricelist/:id/delete': 'pricelist.destroy',
  'GET /pricelist/:id/edit': 'pricelist.edit',
  'POST /pricelist/:id/update': 'pricelist.update',

  
'POST /duy': { controller: 'DuyController', action:'create' },
'GET /duy/new': { controller: 'DuyController', action:'new' }, /*neuen eintrag erstellen */
'GET /duy/:id': 'DuyController.findOne',
'GET /duy': 'DuyController.find',

'GET /duy/:id/edit': { controller: 'DuyController', action: 'editOne' },
'POST /duy/:id/update': { controller: 'DuyController', action: 'updateOne' },
'GET /duy/:id/destroy': { controller: 'DuyController', action: 'destroyOne' }, 

'GET /category/new': { view: 'pages/category/new' },
'POST /category': { controller: 'CategoryController', action:'create' },
'GET /category/:id/destroy': { controller: 'CategoryController', action: 'destroyOne' },
'GET /category': { controller: 'CategoryController', action: 'find' },


'POST /kunden': 'KundendatenController.create',
'GET /kunden/new': { controller: 'KundendatenController', action:'new' },
'GET /kunden/:id': 'KundendatenController.findOne',
'GET /kunden': 'KundendatenController.find',

'GET /kunden/:id/edit': 'KundendatenController.editOne',
'POST /kunden/:id/update': 'KundendatenController.updateOne',
'GET /kunden/:id/destroy': 'KundendatenController.destroyOne', 

};


