const CardModel = require('../models/Card')

module.exports.createCard = async (req, res) => {
    const lista = req.params.lista
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
    const card = await CardModel.findOne({_id: id});
    if(!card) {
        return res.status(404);
    }
    else {
        await CardModel.deleteOne({_id: id});
        return res.status(200).json({message: "funcionou legal amigao"});
    }

}

module.exports.updateCard = async (req, res) => {
    const id = req.params.id;
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
    const movedCard = await CardModel.findOneAndUpdate(
        { _id: id },
        { lista },
        { new: true }
    )
    return res.status(200).json(movedCard);
}
