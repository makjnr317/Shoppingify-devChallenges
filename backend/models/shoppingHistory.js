const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const ShoppingHistoryModel = new Schema({
    name: String,
    date : {
        type: Date,
        default: Date.now
    },
    status: String,
    items:[{
        name:String,
        number: Number
    }]
})

ShoppingHistory = mongoose.model("ShoppingHistories", ShoppingHistoryModel)

module.exports = ShoppingHistory