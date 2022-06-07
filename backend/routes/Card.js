const express = require('express');
const router = express.Router();
const CardController = require('../controllers/Card')

router.post('/card/:lista', CardController.createCard);
router.delete('/card/:id', CardController.deleteCard);
router.put('/card/:id', CardController.updateCard);
router.put('/card/:id/:lista', CardController.moveCard)
router.get('/card', CardController.getAllCards)
router.get('/card/:lista', CardController.getCardsFromList);

module.exports = router;