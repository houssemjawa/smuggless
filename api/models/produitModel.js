var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
Produit Schema
 */


var Categorie = new Schema({
    ProduitName: {
        type: String
    },
    ProduitPrice: {
        type: Number
    },


});
module.exports = mongoose.model('Categorie',Categorie);