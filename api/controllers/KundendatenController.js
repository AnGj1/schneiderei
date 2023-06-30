/**
 * Kundendatenkontroller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");


const bcrypt = require('bcryptjs');


module.exports = {
    new: async function (req, res) {
        res.view('pages/kunden/new');
    },
    

    create: async function (req, res) {
      try {
        sails.log.debug("Create customer....");
        let params = req.allParams();
        sails.log.debug(params); // log the received params
        
        // Hashen Sie das Passwort
        const hashedPassword = await bcrypt.hash(params.passwort, 10); // 10 ist die Anzahl der Salz-Runden
    
        // Ersetzen Sie das ursprüngliche Passwort mit dem gehashten Passwort
        params.passwort = hashedPassword;
    
        // Erstellen Sie den Kunden in der Datenbank
        await Kunden.create(params);
    
        res.redirect('/kunden');
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Fehler beim Erstellen des Kunden' });
      }
    },
    

    find: async function (req, res) {
        sails.log.debug("List all costumers....")
    let costumers;
    if (req.query.q && req.query.q.length > 0) {
        costumers = await Kunden.find({
        email: {
          'contains': req.query.q
        }
      })
    } else {
        costumers = await Kunden.find(); //wenn ich meal lade lade ich auch category rein 
    }
    res.view ('pages/kunden/index', { costumers: costumers } );
  },

  findOne: async function (req, res) {
    sails.log.debug("List single costomer....")
    let costumers = await Kunden.findOne({id: req.params.id });
    res.view('pages/kunden/show', { costumers: costumers });
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
