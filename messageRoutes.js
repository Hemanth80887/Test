const express = require('express');
const { CreateMessage, getMessages, deleteMessage } = require('../controllers/MessageController');
const router = express.Router();

router.post('/send/message', CreateMessage);
router.get('/all/messages', getMessages);
router.delete('/delete/message/:id', deleteMessage);

module.exports = router;