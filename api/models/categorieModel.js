var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
Categorie Schema
 */


var Categorie = new Schema({
    CategorieName: {
        type: String
    },


});
module.exports = mongoose.model('Categorie',Categorie);