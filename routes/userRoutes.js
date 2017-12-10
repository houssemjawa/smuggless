var express = require('express');
var User = require('../api/controllers/userController');
var router = express.Router();

router.get('/user', function(req, res) {
  User.getAllUsers(req,res);
});

router.post('/register', function(req, res) {
 User.register(req,res);
});
module.exports = router;
