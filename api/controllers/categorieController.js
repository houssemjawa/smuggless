var Categorie = require('../models/categorieModel')
var mongoose = require('mongoose');


exports.get = function (req, res) {
    var newCategorie = new Categorie();
    console.log(req.body);
    console.log(newCategorie);
    newCategorie.CategorieName = req.body.CategorieName;

    newCategorie.save(function (err, categorie) {
        if (err) {
            return res.status(400).send({
                message: err
            });
        }
        else {
            return res.json(newCategorie);
        }
    });
};
////////////////////////////////////////////////
exports.post = function (req, res) {
    var newCategorie = new Categorie();
    console.log(req.body);
    console.log(newCategorie);
    newCategorie.CategorieName = req.body.CategorieName;
    newCategorie.save(function (err) {
        if (err)
            res.send(err);
        res.send('Categorie added');
    });
}

////////////////////////////
exports.getAllCategories = function(req,res){
    Categorie.find(function(err,categories){
        if (err){
            res.send(err);
        }
        console.log(categories);
        res.json(categories);

    });
};