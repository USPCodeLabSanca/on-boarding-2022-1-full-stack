const { isValidObjectId } = require('mongoose');
const CardModel = require('../models/Card')
const CardListModel = require('../models/CardList')

module.exports.createCard = async (req, res) => {
    const lista = req.params.lista;

    const newCard = new CardModel({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        lista: lista
    })
    
    const CardCreated = await newCard.save();
    return res.status(200).json(CardCreated);
}

module.exports.deleteCard = async (req, res) => {
    const id = req.params.id;
    if(!isValidObjectId(id))
        return res.status(404).send("Card not found");

    const card = await CardModel.findOneAndDelete({ _id: id }).exec();
    if(card)
        return res.status(200).json(card);

    return res.status(404).send("Card not found");
}

module.exports.updateCard = async (req, res) => {
    const id = req.params.id;
    if(!isValidObjectId(id))
        return res.status(404).send("Card not found");

    const updatedCard = await CardModel.findOneAndUpdate(
        { _id: id }, 
        { titulo: req.body.titulo, descricao: req.body.descricao },
        { new: true }
    );
    return res.status(200).json(updatedCard);
}

module.exports.moveCard = async (req, res) => {
    const id = req.params.id;
    const lista = req.params.lista;
    
    if(!isValidObjectId(id) || !isValidObjectId(lista))
        return res.status(404).send("Card/CardList not found");
        
    const CardListFound = await CardListModel.find({_id : lista}).exec();
    if(CardListFound.length == 0)
        return res.status(404).send("CardList not found");
        
    const movedCard = await CardModel.findOneAndUpdate(
        { _id: id },
        { lista },
        { new: true }
    )
    if(movedCard)
        return res.status(200).json(movedCard);
    
    return res.status(404).send("Card not Found");
}

module.exports.getAllCards = async (req, res) => {
    const cardsFound = await CardModel.find();
    
    if(cardsFound.length > 0)
        return res.status(200).json(cardsFound);
    
    return res.status(404).send("Cards not Found");
}

module.exports.getCardsFromList = async (req, res) => {
    const lista = req.params.lista;
    if(!isValidObjectId(lista))
        return res.status(404).send("CardList not found");

    const cardsFound = await CardModel.find({lista : lista});
    
    if(cardsFound.length > 0)
        return res.status(200).json(cardsFound);

    return res.status(404).send("CardList not found");
}
