
var User = require('../models/userModel')
var mongoose = require('mongoose');
//var jwt = require('jsonwebtoken');
  exports.register = function(req,res){
    var newUser = new User();
    console.log(req.body);
    console.log(newUser)
      newUser.password = req.body.password;
      newUser.userName = req.body.userName;
      newUser.save(function(err, user) {
        if (err) {
          return res.status(400).send({
            message : err
          });
        }
        else {
          return res.json(newUser);
        }
      });
  };

  exports.sign_in = function(req,res){
    User.findOne({
        userName: req.body.userName
      }, function(err, user) {
        if (err) throw err;
        if (!user) {
          res.status(401).json({ message: 'Authentication failed. User not found.' });
        } else if (user) {
          if (!user.comparePassword(req.body.password)) {
            res.status(401).json({ message: 'Authentication failed. Wrong password.' });
          } else {
            return res.json({token: jwt.sign({ userName: user.userName, _id: user._id}, 'RESTFULAPIs')});
          }
        }
      });
  };

  exports.loginRequired = function(req, res, next){
    if (req.user) {
        next();
      } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
      }
  };
  exports.getAllUsers = function(req,res){
    User.find(function(err,users){
      if (err){
        res.send(err);
      }
      console.log(users);
      res.json(users);

    });
  };
