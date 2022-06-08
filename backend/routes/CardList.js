const express = require('express');
const router = express.Router();
const CardListController = require('../controllers/CardList')

router.post('/cardList/:quadro', CardListController.createCardList);
router.delete('/cardList/:id', CardListController.deleteCardList);
// router.get('/cardList/:id', CardListController.getCardList);
router.get('/cardList/:quadro', CardListController.getCardListsFromBoard);
router.get('/cardList', CardListController.getAllCardLists);
router.put('/cardList/:id', CardListController.renameCardList);

module.exports = router;