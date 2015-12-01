'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated');
var User = require('../models/user');

router.get('/', ensureAuthenticated, function(req, res){
  console.log(req.user);
  User.find({}, function(err, users){
    res.send(users);
  })
})

router.post('/', ensureAuthenticated, function(req, res){
  var senderId = req.user;
  var receiverId = req.body.bro;
  var message = req.body.message;

  User.sendMessage(senderId, receiverId, message, function(err, savedMessage){
    res.send(savedMessage);
  })
})

module.exports = router;
