//import Schema
const CardsListModel = require('../models/CardsList')

module.exports.createCardsList = async (req, res) => {
    const newCardsList = new CardsListModel({
        title: req.body.title,
    })
    const cardsListCreated = await newCardsList.save();
    return res.status(200).json(cardsListCreated);
}

module.exports.deleteCardsList = async (req, res) => {
    const id = req.params.id;

    //const cardsListDeleted = await CardsListModel.remove({ _id: id }).exec(); 
    const cardsListDeleted = await CardsListModel.findOneAndDelete({ _id: id }).exec();
    return res.status(200).json(cardsListDeleted);
}