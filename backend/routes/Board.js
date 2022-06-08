const express = require('express');
const router = express.Router();
const BoardController = require('../controllers/Board')

router.post('/board', BoardController.createBoard);
router.delete('/board/:id', BoardController.deleteBoard);
router.get('/board/', BoardController.getAllBoard);
router.get('/board/:id', BoardController.getBoard);
router.put('/board/:id', BoardController.updateBoard);

module.exports = router;