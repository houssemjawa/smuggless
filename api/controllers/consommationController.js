var Consommation = require('../models/consommationModel')
var mongoose = require('mongoose');


////////////////////////////////////////////////
exports.addConsommations = function(req,res){
    var newConsommation = new Consommation();
    console.log(req.body);
    console.log(newConsommation);
    newConsommation.Produit = req.body.Produit;
    newConsommation.Quantite = req.body.Quantite;
    newConsommation.Gouvernat = req.body.Gouvernat;
    newConsommation.save(function(err,consommation) {
        if (err) {
            return res.status(400).send({
                message : err
            });
        }
        else {
            return res.json(newConsommation);
        }
    });
};

////////////////////////////
exports.getAllConsommations = function(req,res){
    Consommation.find(function(err,consommations){
        if (err){
            res.send(err);
        }
        console.log(consommations);
        res.json(consommations);

    });
};
