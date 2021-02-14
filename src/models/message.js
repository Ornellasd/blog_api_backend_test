const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    title: { type: String, required: true, maxLength: 100 },
    text: { type: String, required: true, maxLength: 140},
    user: { type: String, required: true, maxLength: 50 }
  }
);

module.exports = mongoose.model('Message', MessageSchema);