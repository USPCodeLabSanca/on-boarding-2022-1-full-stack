const mongoose = require('mongoose')

const CardSchema = mongoose.Schema({
    titulo: String,
    descricao: String,
    tags: [String],
    autor: String,
    cor: String,
    lista: mongoose.ObjectId
})

module.exports = mongoose.model('Card', CardSchema)

// Ola
// Tudo bom com você?