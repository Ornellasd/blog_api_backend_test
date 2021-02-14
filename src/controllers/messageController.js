const Message = require('../models/message');

exports.messages_get = (req, res) => {
  Message.find({}, (err, messages) => {
    if(err) {
      return err;
    } else {
      console.log(messages);
      return res.send(messages);
    }
  });
}

exports.new_message_post = (req, res) => {
  const message = new Message({
    user: req.body['message-user'],
    title: req.body['message-title'],
    text: req.body['message-text']
  });

  console.log(message);

  // expand save method
  message.save();
}

exports.delete_message_post = (req, res) => {
  Message.findByIdAndRemove(req.params.id, (err, message) => {
    if(err) return err;
  });
}