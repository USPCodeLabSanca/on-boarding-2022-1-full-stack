const mongoose = require('mongoose')

const cardSchema = mongoose.Schema({
    titulo: String,
    descricao: String,
    tags: [String],
    autor: String,
    cor: String,
    lista: mongoose.ObjectId
})

module.exports = mongoose.model('Card', cardSchema)
