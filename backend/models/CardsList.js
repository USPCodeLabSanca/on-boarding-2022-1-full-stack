const mongoose = require('mongoose')

const CardsListSchema = mongoose.Schema({
    title: String
})

module.exports = mongoose.model('CardList', CardsListSchema)