var express = require('express');
var Produit = require('../api/controllers/produitController');
var router = express.Router();

router.get('/', function (req, res) {
    Produit.getAllProduits(req, res);
});

router.post('/add', function (req, res) {
    Produit.addProduits(req, res);
});
module.exports = router;
