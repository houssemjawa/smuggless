var express = require('express');
var Categorie = require('../api/controllers/categorieController');
var router = express.Router();

router.get('/categorie', function(req, res) {
    Categorie.getAllCategories(req,res);
});

router.post('/add', function(req, res) {
    Categorie.post(req,res);
});
module.exports = router;