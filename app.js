
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jsonwebtoken = require("jsonwebtoken");
var index = require('./routes/index');
var users = require('./routes/users');
var user = require('./routes/userRoutes');
var app = express();
var mongoose = require('mongoose');
var categorie = require('./routes/categorieRoutes');
var produit = require('./routes/produitRoutes');
var produitlegal = require('./routes/produitlegalRoutes');
var consommation = require('./routes/consommationRoutes');
var uri = 'mongodb://localhost/tunihack';
/*mongoose.createConnection(uri, {
  useMongoClient: true,
},function(error) {
  console.log(error);
});*/
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tunihack',{
  useMongoClient : true
},function(){
  console.log(mongoose.connection.readyState);
});
console.log(mongoose.connection.readyState);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api/user',user);
app.use('/api/categorie',categorie);
app.use('/api/produit',produit);
app.use('/api/produitlegal',produitlegal);
app.use('/api/consommation',consommation);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
   //set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
