const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const ShoppingHistoryModel = new Schema({
    name: String,
    date : {type: Date, default: Date.now},
    status: String,
    items:[{
        category:String,
        food : [{foodItemId :String, name: String, number: Number}]
    }]
})

ShoppingHistory = mongoose.model("ShoppingHistories", ShoppingHistoryModel)

module.exports = ShoppingHistory