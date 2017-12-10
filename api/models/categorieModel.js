var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
Categorie Schema
 */


var Categorie = new Schema({
    categorieName: {
        type: String
    },


});
module.exports = mongoose.model('Categorie',Categorie);
