const { isValidObjectId } = require('mongoose');
const CardModel = require('../models/Card')

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

    const card = await CardModel.findOne({ _id: id });
    if(!card) {
        return res.status(404);
    }else {
        await CardModel.deleteOne({_id: id});
        return res.status(200).json(card);
    }

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

    if(!isValidObjectId(id))
        return res.status(404).send("Card not found");

    const movedCard = await CardModel.findOneAndUpdate(
        { _id: id },
        { lista },
        { new: true }
    )
    return res.status(200).json(movedCard);
}

module.exports.getAllCards = async (req, res) => {
    const cardsFound = await CardModel.find();
    
    return res.status(200).json(cardsFound);
}

module.exports.getCardsFromList = async (req, res) => {
    const lista = req.params.lista;
    if(!isValidObjectId(lista))
        return res.status(404).send("CardList not found");

    const cardsFound = await CardModel.find({lista : lista});
    
    if(cardsFound)
        return res.status(200).json(cardsFound);

    return res.status(404).json("CardList not found");
}