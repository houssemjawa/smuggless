var user = require('../api/controllers/userController');

module.exports = {
  configure: function(app) {
    app.get('/api/user', function(req, res) {
      user.getAllUsers;
    });
      app.post('/api/register', function(req, res) {
     user.register;
    });
  }
};
