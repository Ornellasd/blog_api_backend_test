const express = require('express');

const message_controller = require('../controllers/messageController');

const router = express.Router();

router.get('/messages', message_controller.messages_get);
router.get('/message/post', message_controller.message_post);

module.exports = router;