'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated')
// var User = require('../models/user');
var Message = require('../models/message');

router.get('/', ensureAuthenticated, function(req, res){
  console.log(req.user);

  Message.find({receiver: req.user}, function(err, messages){
    console.log(messages);
    res.send(messages);
  }).populate('sender');
})

module.exports = router;
