var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
Consommation Schema
 */


var Consommation = new Schema({
    Produit: [{ type: Schema.Types.ObjectId, ref: 'Produit' }],

    Gouvernat: {
        type: String
    },
    Quantite: {
        type: Number
    },

});
module.exports = mongoose.model('Consommation',Consommation);