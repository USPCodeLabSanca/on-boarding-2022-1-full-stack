const mongoose = require('mongoose')

const BoardSchema = mongoose.Schema({
    titulo: String
})

module.exports = mongoose.model('CardList', cardSchema)

// Ola
// Tudo bom com você?