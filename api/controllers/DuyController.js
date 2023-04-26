/**
 * DuyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");


module.exports = {
  new: async function (req, res) {
    let categories = await Category.find();
    res.view('pages/duy/new', { categories });
  },

  create: async function (req, res) {
    sails.log.debug("Create article....")
    let params = req.allParams();
    await Duy.create(params);
    res.redirect ('/duy' );
  },

  find: async function (req, res) {
    sails.log.debug("List all articles....")
    let duys;
    if (req.query.q && req.query.q.length > 0) {
      duys = await Duy.find({
        name: {
          'contains': req.query.q
        }
      })
    } else {
      duys = await Duy.find().populate("category"); //wenn ich meal lade lade ich auch category rein 
    }
    res.view ('pages/duy/index', { duys: duys } );
  },

  findOne: async function (req, res) {
    sails.log.debug("List single article....")
    let duy = await Duy.findOne({ id: req.params.id });
    res.view ('pages/duy/show', { duy: duy } );
  },

  destroyOne: async function (req, res) {
    sails.log.debug("Destroy single article....")
    await Duy.destroyOne({ id: req.params.id });
    res.redirect('/duy');
  },

  editOne: async function (req, res) {
    sails.log.debug("Edit single duy....")
    let duy = await Duy.findOne({ id: req.params.id }).populate('category');
    res.view('pages/duy/edit', { duy: duy });
  },

  updateOne: async function (req, res) {
    sails.log.debug("Update single article....")
    let duy = await Duy.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/duy');
  }
};

