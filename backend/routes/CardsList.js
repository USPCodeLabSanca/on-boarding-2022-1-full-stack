const express = require('express');
const router = express.Router();
const CardsListController = require('../controllers/CardsList')

router.post('/cardsList', CardsListController.createCardsList);
router.delete('/cardsList/:id', CardsListController.deleteCardsList);
//router.get('/cardList', CardsListController.getCardsList);

module.exports = router;