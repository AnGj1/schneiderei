/**
 * Kundendatenkontroller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");
const Kunden = require("../models/Kunden");

module.exports = {
    new: async function (req, res) {
        res.view('pages/kunden/new');
      },

      create: async function(req, res) {
        sails.log.debug("Create customer....")
        let params = req.allParams();
        await Kunden.create(params);
        res.redirect('/kunden');
      },

      find: async function (req, res) {
        sails.log.debug("List all customers....")
        let kunde;
        if (req.query.q && req.query.q.length > 0) {
          kunde = await Kunden.find({
            email: {
              'contains': req.query.q
            }
          })
        } else {
          kunde = await Duy.find().populate("name"); //wenn ich meal lade lade ich auch category rein 
        }
        res.view ('pages/kunden/index', { kunde: kunde } );
      },

      findOne: async function(req, res) {
        sails.log.debug("List single customer....")
        let kunden = await Kunden.findOne(req.param('id'));
        res.view('pages/kunden/show', { kunden });
      },

     
  editOne: async function(req, res) {
    let kunden = await Kunden.findOne(req.param('id'));
    res.view('pages/kunden/edit', { kunden });
  },

  updateOne: async function(req, res) {
    let params = req.allParams();
    let kunden = await Kunden.updateOne({ id: req.param('id') }).set(params);
    res.redirect(`/kunden/${kunden.id}`);
  },

  destroyOne: async function(req, res) {
    await Kunden.destroyOne(req.param('id'));
    res.redirect('/kunden');
  }
};
    