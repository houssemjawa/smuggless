var Produit = require('../models/produitModel')
var mongoose = require('mongoose');


////////////////////////////////////////////////
exports.addProduits = function(req,res){
    var newProduit = new Produit();
    console.log(req.body);
    console.log(newProduit);
    newProduit.ProduitName = req.body.ProduitName;
    newProduit.ProduitPrice = req.body.ProduitPrice;
    newProduit.save(function(err, user) {
        if (err) {
            return res.status(400).send({
                message : err
            });
        }
        else {
            return res.json(newProduit);
        }
    });
};

////////////////////////////
exports.getAllProduits = function(req,res){
    Produit.find(function(err,produits){
        if (err){
            res.send(err);
        }
        console.log(produits);
        res.json(produits);

    });
};
