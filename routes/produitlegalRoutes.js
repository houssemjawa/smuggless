var express = require('express');
var Produit = require('../api/controllers/produitlegalController');
var router = express.Router();

router.get('/', function (req, res) {
    Produit.getAllProduitsLegals(req, res);
});

router.post('/add', function (req, res) {
    Produit.addProduitsLegals(req, res);
});
module.exports = router;
