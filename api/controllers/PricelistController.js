/**
 * PricelistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {
 

  create: async function (req, res) {
    sails.log.debug("Create pricelist....");
    let params = req.allParams();
    await Pricelist.create(params);
    res.redirect ('/pricelist' );
  },

  new: async function (req, res) {
    let categories = await Category.find();
    let admins = await Admin.find();
    res.view('pages/pricelist/new', { categories, admins });
  },

 find: async function (req, res) {
    sails.log.debug("List all prices....");
    let prices;
    if (req.query.q && req.query.q.length > 0) {
      prices = await Pricelist.find({
        name: {
          'contains': req.query.q
        }
      });
    } else {
      prices = await Pricelist.find().populate("category");
    }
    res.view ('pages/pricelist/index', {prices: prices} );
  }, 

  show: async function (req, res) {
    sails.log.debug("List all prices....");
    let prices;
    if (req.query.q && req.query.q.length > 0) {
      prices = await Pricelist.find({
        name: {
          'contains': req.query.q
        }
      });
    } else {
      prices = await Pricelist.find().populate("category");
    }
    res.view ('pages/preise', {prices: prices} );
  }, 

  findOne: async function (req, res) {
    sails.log.debug("List single price....");
    let pricelist = await Pricelist.findOne({ id: req.params.id });
    res.view ('pages/pricelist/show', { pricelist: pricelist } );
  },
  
  editOne: async function (req, res) {
    sails.log.debug("Edit single price....");
    let pricelist = await Pricelist.findOne({ id: req.params.id });
    let admins = await Admin.find();
    res.view ('pages/pricelist/edit', { pricelist: pricelist, admins } );
  },
  

  destroyOne: async function (req, res) {
    sails.log.debug("Delete single price....");
    await Pricelist.destroyOne({ id: req.params.id });
    res.redirect ('/pricelist' );
  },

  updateOne: async function (req, res) {
    sails.log.debug("Update price....");
    let params = req.allParams();
    await Pricelist.updateOne({id: req.params.id}).set(params);
    res.redirect ('/pricelist' );
  },
};
