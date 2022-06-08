const { isValidObjectId } = require('mongoose');
const CardListModel = require('../models/CardList')

module.exports.createCardList = async (req, res) => {
    const quadro = req.params.quadro;

    if(!isValidObjectId(quadro))
        return res.status(404).send("CardList not found");

    const newCardList = new CardListModel({
        titulo: req.body.titulo,
        quadro: quadro
    });
    const cardListCreated = await newCardList.save();
    
    return res.status(200).json(cardListCreated);
}

// module.exports.getCardList = async (req, res) => {
//     const id = req.params.id;
//     if(!isValidObjectId(id))
//         return res.status(404).send("CardList not found");

//     const cardListFound = await CardListModel.find({ _id : id }).exec();
    
//     if(cardListFound)
//         return res.status(200).json(cardListFound);

//     return res.status(404).json("CardList not found");
// }

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

    return res.status(404).json("CardList not found");
}

module.exports.getAllCardLists = async (req, res) => {
    const cardListsFound = await CardListModel.find();
    
    return res.status(200).json(cardListsFound);
}

module.exports.getCardListsFromBoard = async (req, res) => {
    const quadro = req.params.quadro;

    if(!isValidObjectId(quadro))
        return res.status(404).send("Board not found");

    const cardListsFound = await CardListModel.find({ quadro : quadro });
    
    if(cardListsFound)
        return res.status(200).json(cardListsFound);

    return res.status(404).json("CardLists not found");
}