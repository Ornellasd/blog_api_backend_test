const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

const Message = require('./models/message');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// mongoose setup
const mongoDB = process.env.DB;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/messages', (req, res) => {
  Message.find({}, (err, messages) => {
    if(err) {
      return err;
    } else {
      return res.send(messages);
    }
  });
});

app.post('/message/post', (req, res) => {
  const message = new Message({
    user: req.body['message-user'],
    title: req.body['message-title'],
    text: req.body['message-text']
  });

  console.log(message);

  // expand save method
  message.save();
});

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`));