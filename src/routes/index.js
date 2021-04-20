const express = require('express');

const message_controller = require('../controllers/messageController');
const user_controller = require('../controllers/userController');

const router = express.Router();

router.get('/messages', message_controller.messages_get);

router.post('/message/post', message_controller.new_message_post);

router.get('/message/:id/delete', message_controller.delete_message_post);

router.post('/create-user', user_controller.new_user_post);

module.exports = router;