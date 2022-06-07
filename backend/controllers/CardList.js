//import Schema
const CardListModel = require('../models/CardList')

module.exports.createCardList = async (req, res) => {
    const quadro = req.params.id;
    const newCardList = new CardListModel({
        titulo: req.body.titulo,
        quadro: quadro
    })
    const cardListCreated = await newCardList.save();
    return res.status(200).json(cardListCreated);
}

module.exports.deleteCardList = async (req, res) => {
    const id = req.params.id;

    const cardListDeleted = await CardListModel.findOneAndDelete({ _id: id }).exec();
    return res.status(200).json(cardListDeleted);
}