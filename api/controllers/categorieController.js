var Categorie = require('../models/categorieModel')
var mongoose = require('mongoose');


////////////////////////////////////////////////
exports.addCategories = function(req,res){
  var newCategorie = new Categorie();
  console.log(req.body);
  console.log(newCategorie);
    newCategorie.categorieName = req.body.categorieName;
    newCategorie.save(function(err, user) {
      if (err) {
        return res.status(400).send({
          message : err
        });
      }
      else {
        return res.json(newCategorie);
      }
    });
};

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
