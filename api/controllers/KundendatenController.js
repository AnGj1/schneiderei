/**
 * Kundendatenkontroller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");


console.log(Kunden);

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
        try {
          sails.log.debug("List all customers....");
      
          // Check if query parameter `q` is provided and has a value
          const query = req.query.q && req.query.q.length > 0 ?
            { email: { 'contains': req.query.q } } : {};
      
          const customers = await Kunden.find(query);
      
          res.view('pages/kunden/index', { kunde: customers });
      
        } catch (err) {
          sails.log.error(err);
          return res.serverError();
        }
      },

    findOne: async function (req, res) {
        sails.log.debug("List single customer....")
        let kunden = await Kunden.findOne({id: req.params.id});
        res.view('pages/kunden/show', { kunden:kunden });
    },


    editOne: async function (req, res) {
        let kunden = await Kunden.findOne(req.param('id'));
        res.view('pages/kunden/edit', { kunden });
    },

    updateOne: async function (req, res) {
        let params = req.allParams();
        let kunden = await Kunden.updateOne({ id: req.param('id') }).set(params);
        res.redirect(`/kunden/${kunden.id}`);
    },

    destroyOne: async function (req, res) {
        await Kunden.destroyOne(req.param('id'));
        res.redirect('/kunden');
    }
};
