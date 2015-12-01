'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated')
// var User = require('../models/user');
var Message = require('../models/message');

router.get('/', ensureAuthenticated, function(req, res){
  console.log(req.user);

  Message.find( {$or: [{receiver: req.user}, {sender: req.user}] }, function(err, messages){
    var data = {};
    data.messages = messages;
    data.user = req.user;
    res.send(data);
  }).populate('receiver sender');
})

module.exports = router;
