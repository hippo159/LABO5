//require express router
const express = require('express');
const router = express.Router();

const messagesController = require('../controllers/messages');

router.get("/", messagesController.getAll);

module.exports = router;
