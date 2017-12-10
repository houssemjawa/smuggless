

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/**
* User Schema
*/

var User = new Schema({
  userName : {
    type : String
  },
  password : {
    type : String
  },
  created : {
    type : Date,
    default : Date.now
  }

});

User.methods.comparePassword = function(password) {
if(this.password==password){
  return true;
}
else {
  return false;
}
};
module.exports = mongoose.model('User',User);
