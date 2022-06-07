const express = require('express');
const router = express.Router();
const CardController = require('../controllers/Card')

router.post('/card', CardController.createCard);
router.delete('/card/:id', CardController.deleteCard);
router.put('/card/:id', CardController.updateCard);

module.exports = router;