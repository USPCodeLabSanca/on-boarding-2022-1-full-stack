const express = require('express');
const router = express.Router();
const CardListController = require('../controllers/CardList')

router.post('/cardList/:id', CardListController.createCardList);
router.delete('/cardList/:id', CardListController.deleteCardList);
router.get('/cardList/:id', CardListController.getCardListFromBoard);
router.get('/cardList/', CardListController.getAllCardList);
router.put('/cardList/:id', CardListController.renameCardList);

module.exports = router;