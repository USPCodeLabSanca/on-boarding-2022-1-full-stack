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

    const Board = await BoardModel.find({ _id: id }).exec();
    return res.status(200).json(Board);
    
    /* const Board = await BoardModel.findOne({ _id: id }).exec(function (e, docs) {
        res.json(docs);
        res.end();
    }); */
}

module.exports.deleteBoard = async (req, res) => {
    const id = req.params.id;
    const Board = await BoardModel.deleteOne({_id: id });

    return res.status(200).json(Board);
    
}

module.exports.updateBoard = async (req, res) => {
    const id = req.params.id;
    const updatedBoard = await BoardModel.findOneAndUpdate(
        { _id: id }, 
        { titulo: req.body.titulo },
        { new: true }
    );
    return res.status(200).json(updatedBoard);
}