const mongoose = require('mongoose')

const ShopingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Shoping', ShopingSchema)