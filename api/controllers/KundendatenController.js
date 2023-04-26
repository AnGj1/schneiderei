/**
 * Kundendatenkontroller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");





module.exports = {
    new: async function (req, res) {
        res.view('pages/kunden/new');
    },

    create: async function (req, res) {
        sails.log.debug("Create customer....")
        let params = req.allParams();
        sails.log.debug(params); // log the received params
        await Kunden.create(params);
        res.redirect('/kunden');
    },

    find: async function (req, res) {
        sails.log.debug("List all costumers....")
    let costumers;
    if (req.query.q && req.query.q.length > 0) {
        costumers = await Kunden.find({
        name: {
          'contains': req.query.q
        }
      })
    } else {
        costumers = await Kunden.find(); //wenn ich meal lade lade ich auch category rein 
    }
    res.view ('pages/kunden/index', { costumers: costumers } );
  },

    findOne: async function (req, res) {
        sails.log.debug("List single customer....")
        let costumers  = await Kunden.findOne({id: req.params.id });
        res.view('pages/kunden/show', { costumers :costumers  });
    },


    editOne: async function (req, res) {
        sails.log.debug("Edit single costumer....")
        let costumers  = await Kunden.findOne({id: req.params.id});
        res.view('pages/kunden/edit', { costumers  : costumers  });
    },

    updateOne: async function (req, res) {
        sails.log.debug("Update single costumer....")
        let costumers  = await Kunden.updateOne({ id: req.params.id }).set(req.body);
        res.redirect('/kunden');
      },

    destroyOne: async function (req, res) {
        sails.log.debug("Delete single costumer....")
        await Kunden.destroyOne({id: req.params.id});
        res.redirect('/kunden');
    }
};
