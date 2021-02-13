const express = require('express');
const Message = require('../models/message');

const router = express.Router();

router.get('/messages', (req, res) => {
  Message.find({}, (err, messages) => {
    if(err) {
      return err;
    } else {
      return res.send(messages);
    }
  });
});

router.post('/message/post', (req, res) => {
  const message = new Message({
    user: req.body['message-user'],
    title: req.body['message-title'],
    text: req.body['message-text']
  });

  console.log(message);

  // expand save method
  message.save();
});

module.exports = router;