var ProduitLegal = require('../models/produitlegalModel')
var mongoose = require('mongoose');


////////////////////////////////////////////////
exports.addProduitsLegals = function(req,res){
    var newProduitLegal = new ProduitLegal();
    console.log(req.body);
    console.log(newProduitLegal);
    newProduitLegal.Produit = req.body.Produit;
    newProduitLegal.Quantite = req.body.Quantite;
    newProduitLegal.Gouvernat = req.body.Gouvernat;
    newProduitLegal.save(function(err, produitlegal) {
        if (err) {
            return res.status(400).send({
                message : err
            });
        }
        else {
            return res.json(newProduitLegal);
        }
    });
};

////////////////////////////
exports.getAllProduitsLegals = function(req,res){
    ProduitLegal.find(function(err,produitslegals){
        if (err){
            res.send(err);
        }
        console.log(produitslegals);
        res.json(produitslegals);

    });
};
