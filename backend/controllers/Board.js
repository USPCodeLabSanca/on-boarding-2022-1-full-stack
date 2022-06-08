const { isValidObjectId } = require('mongoose');
const BoardModel = require('../models/Board')

module.exports.createBoard = async (req, res) => {
    const newBoard = new BoardModel({
        titulo: req.body.titulo
    })
    const BoardCreated = await newBoard.save();
    return res.status(200).json(BoardCreated);
}

module.exports.getBoard = async (req, res) => {
    const id = req.params.id;

    if(!isValidObjectId(id))
        return res.status(404).send("Board not found");

    const Board = await BoardModel.find({ _id: id }).exec();
    if(Board)
        return res.status(200).json(Board);
    
    return res.status(404).send("Board not found");
}

module.exports.deleteBoard = async (req, res) => {
    const id = req.params.id;

    if(!isValidObjectId(id))
        return res.status(404).send("Board not found");

    const Board = await BoardModel.deleteOne({_id: id });
    if(Board)
        return res.status(200).json(Board);

    return res.status(404).send("Board not found");   
}

module.exports.updateBoard = async (req, res) => {
    const id = req.params.id;
    
    if(!isValidObjectId(id))
        return res.status(404).send("Board not found");

    const updatedBoard = await BoardModel.findOneAndUpdate(
        { _id: id }, 
        { titulo: req.body.titulo },
        { new: true }
    );

    if(updatedBoard)
        return res.status(200).json(updatedBoard);

    return res.status(404).send("Board not found");
}