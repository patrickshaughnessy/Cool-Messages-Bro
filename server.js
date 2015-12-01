'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var mongoose = require('mongoose');
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost/oauthmessageboard';
mongoose.connect(mongoUrl, function(err){
  if (err) return console.log('Error connecting to Mongodb: ', err);
  console.log('Connected to MongoDB: ', mongoUrl);
})

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', require('./routes/index'));

app.listen(PORT, function(){
  console.log('Listening on port ', PORT);
});
