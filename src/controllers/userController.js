const User = require('../models/user');

exports.new_user_post = (req, res) => {
  const user = new User({
    username: req.body['signup-username'],
    password: req.body['signup-password']
  });

  console.log(user);

  user.save();
}