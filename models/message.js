'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var User = require('../models/user');

var Message;

var messageSchema = Schema({
  sender: { type: Schema.Types.ObjectId, ref: 'User' },
  receiver: { type: Schema.Types.ObjectId, ref: 'User' },
  text: String,
  timestamp: { type: String, default: moment().unix() },
  time: { type: String, default: moment().format('MMMM Do YYYY, h:mm:ss a') }
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
