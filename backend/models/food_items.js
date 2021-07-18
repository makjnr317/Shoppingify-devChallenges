const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const foodItemsModel = new Schema({
    category:String,
    food : [{
        name: String,
        note: String,
        image: String,
    }]
})

foodItems = mongoose.model("FoodItems", foodItemsModel)

module.exports = foodItems