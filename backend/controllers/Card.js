const CardModel = require('../models/Card')

module.exports.createCard = async (req, res) => {
    const newCard = new CardModel({
        titulo: req.body.titulo,
        descricao: req.body.descricao,

    })
    const CardCreated = await newCard.save();
    return res.status(200).json(CardCreated);
}

module.exports.deleteCard = async (req, res) => {
    const id = req.params.id;
    const card = await CardModel.findOne({_id: id});
    if(!card) {
        return res.status(404);
    }
    else {
        await CardModel.deleteOne({_id: id});
        return res.status(200).json({message: "funcionou legal amigao"});
    }

}