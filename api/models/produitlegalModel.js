var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
Produitlegal Schema
 */


var ProduitLegal = new Schema({
    Produit: [{ type: Schema.Types.ObjectId, ref: 'Produit' }],

    Gouvernat: {
        type: String
    },
    Quantite: {
        type: Number
    },

});
module.exports = mongoose.model('ProduitLegal',ProduitLegal);