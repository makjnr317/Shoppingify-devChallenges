const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const foodItemModel = new Schema({
    name : String,
    category : String,
    note : String
})

foodItem = mongoose.model("Food_items", foodItemModel)

module.exports = foodItem