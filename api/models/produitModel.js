var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
Produit Schema
 */


var Produit = new Schema({
    ProduitName: {
        type: String
    },
    ProduitPrice: {
        type: Number
    },
    Categorie: [{ type: Schema.Types.ObjectId, ref: 'Categorie' }]

});
module.exports = mongoose.model('Produit',Produit);