'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');
var jwt = require('jwt-simple');

var Message = require('../models/message');

var User;

var userSchema = Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
  displayName: String,
  picture: String,
  facebook: String,
  google: String,
  github: String,
  instagram: String,
  linkedin: String,
  twitter: String
});

userSchema.methods.createJWT = function(){
  var payload = {
    sub: this._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, process.env.JWT_SECRET);
}

userSchema.statics.sendMessage = function(senderId, receiverId, message, cb){

  User.findById(senderId, function(err, sendingBro){

    User.findById(receiverId, function(err, receivingBro){
      var newMessage = new Message({
        sender: sendingBro._id,
        receiver: receivingBro._id,
        text: message
      });

      newMessage.save(function(err, savedMessage){
        cb(err, savedMessage);
      });
    })
  })
}

var User = mongoose.model('User', userSchema);

module.exports = User;
