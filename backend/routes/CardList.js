const express = require('express');
const router = express.Router();
const CardListController = require('../controllers/CardList')

router.post('/cardList/:id', CardListController.createCardList);
router.delete('/cardList/:id', CardListController.deleteCardList);
router.get('/cardList/:id', CardListController.getCardList);
router.put('/cardList/:id', CardListController.renameCardList);
//router.get('/cardList', CardListController.getCardsList);

module.exports = router;