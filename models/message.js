'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Message;

var messageSchema = Schema({
  sender: { type: Schema.Types.ObjectId, ref: 'User'},
  receiver: { type: Schema.Types.ObjectId, ref: 'User'},
  text: String
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
