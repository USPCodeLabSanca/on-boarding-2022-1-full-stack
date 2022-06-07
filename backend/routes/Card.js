const express = require('express');
const router = express.Router();
const CardController = require('../controllers/Card')

router.post('/card', CardController.createCard);
router.delete('/card/:id', CardController.deleteCard);

module.exports = router;