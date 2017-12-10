var express = require('express');
var Consommation = require('../api/controllers/consommationController');
var router = express.Router();

router.get('/', function (req, res) {
    Consommation.getAllConsommations(req, res);
});

router.post('/add', function (req, res) {
    Consommation.addConsommations(req, res);
});
module.exports = router;
