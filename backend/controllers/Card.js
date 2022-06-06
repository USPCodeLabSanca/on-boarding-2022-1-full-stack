const CardModel = require('../models/Card')

module.exports.createCard = async (req, res) => {
    const newCard = new CardModel({
        titulo: req.body.titulo,
        descricao: req.body.descricao,

    })
    const CardCreated = await newCard.save();
    return res.status(200).json(CardCreated);
}