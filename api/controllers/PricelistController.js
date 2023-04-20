/**
 * PricelistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");
const Pricelist = require("../models/Pricelist");

module.exports = {
  create: async function (req, res) {
    sails.log.debug("Create pricelist....")
    let params = req.allParams();
    await Pricelist.create(params);
    res.redirect ('/pricelist' );
  },

  find: async function (req, res) {
    sails.log.debug("List all prices....")
    
    res.view ('pages/pricelist/index', { pricelist: pricelist } );
  },

  findOne: async function (req, res) {
    sails.log.debug("List single price....")
    let pricelist = await Pricelist.findOne({ id: req.params.id });
    res.view ('pages/pricelist/show', { pricelist: pricelist } );
  },
  
  edit: async function (req, res) {
    sails.log.debug("Edit single price....")
    let pricelist = await Pricelist.findOne({ id: req.params.id });
    res.view ('pages/pricelist/edit', { pricelist: pricelist } );
  },

  destroy: async function (req, res) {
    sails.log.debug("Delete single price....")
    let pricelist = await Pricelist.destroyOne({ id: req.params.id });
    // 
    res.redirect ('/pricelist' );
  },
  update: async function (req, res) {
    sails.log.debug("Update price....")
    let params = req.allParams();
    await Pricelist.updateOne({id: req.params.id}).set(params);
    res.redirect ('/pricelist' );
  },

};

