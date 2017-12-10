var express = require('express');
var user = require('../api/controllers/userController');
var router = express.Router();

router.get('/user', function(req, res, next) {
  user.getAllUsers;
});

router.post('/register', function(req, res) {
 user.register;
});
module.exports = router
