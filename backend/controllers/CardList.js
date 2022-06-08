const { isValidObjectId } = require('mongoose');
const CardListModel = require('../models/CardList')

module.exports.createCardList = async (req, res) => {
    const quadro = req.params.id;
    if(!isValidObjectId(quadro))
        return res.status(404).send("CardList not found");

    const newCardList = new CardListModel({
        titulo: req.body.titulo,
        quadro: quadro
    });
    const cardListCreated = await newCardList.save();
    
    return res.status(200).json(cardListCreated);
}

module.exports.getAllCardList = async (req, res) => {
    const cardListFound = await CardListModel.find().exec();
    
    if(cardListFound)
        return res.status(200).json(cardListFound);

    return res.status(404).send("CardList not found");
}

module.exports.getCardListFromBoard = async (req, res) => {
    const board = req.params.id;
    if(!isValidObjectId(board))
        return res.status(404).send("Board not found");
    
    const cardListFound = await CardListModel.find({quadro : board}).exec();
    
    if(cardListFound)
        return res.status(200).json(cardListFound);

    return res.status(404).send("CardList not found");
}

module.exports.deleteCardList = async (req, res) => {
    const id = req.params.id;
    if(!isValidObjectId(id))
        return res.status(404).send("CardList not found");

    const cardListDeleted = await CardListModel.findOneAndDelete({ _id: id }).exec();
    if(cardListDeleted)
        return res.status(200).json(cardListDeleted);

    return res.status(404).send("CardList not found");
}


module.exports.renameCardList = async (req, res) =>{
    const id = req.params.id;
    const new_title = req.body.titulo;
    const renamedCardList = await CardListModel.findOneAndUpdate(
        {_id : id}, 
        {titulo: new_title}, 
        {new: true}
    ).exec();
    
    if(renamedCardList)
        return res.status(200).json(renamedCardList);

    return res.status(404).send("CardList not found");
}