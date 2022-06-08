const express = require('express');
const router = express.Router();
const BoardController = require('../controllers/Board')

router.post('/board', BoardController.createBoard);
router.delete('/board/:id', BoardController.deleteBoard);
router.put('/board/:id', BoardController.updateBoard);
router.get('/board/:id', BoardController.getBoard);
router.get('/board', BoardController.getAllBoards);

module.exports = router;