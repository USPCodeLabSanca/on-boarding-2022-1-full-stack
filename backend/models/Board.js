const mongoose = require('mongoose')

const BoardSchema = mongoose.Schema({
    titulo: String
})

module.exports = mongoose.model('Board', BoardSchema)

// Ola
// Tudo bom com você?