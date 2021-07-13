const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const CategoriesModel = new Schema({
    name : String
})

Category = mongoose.model("Categories", CategoriesModel)

module.exports = Category