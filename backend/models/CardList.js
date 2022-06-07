const mongoose = require('mongoose')

const CardListSchema = mongoose.Schema({
    titulo: String,
    quadro: mongoose.ObjectId
})

module.exports = mongoose.model('/cardList', CardListSchema)

// Ola
// Tudo bom com você?
