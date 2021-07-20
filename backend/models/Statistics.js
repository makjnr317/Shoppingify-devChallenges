const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const monthlySchema = new Schema({
    month: String,
    count: Number
})

const itemsSales = new Schema({
    name: String,
    count: Number
})

const categorySales = new Schema({
    name :String,
    count: Number
})

const monthlyCount = mongoose.model("MonthlyCount", monthlySchema)
const itemsCount = mongoose.model("MonthlyCount", itemsSales)
const categoryCount = mongoose.model("MonthlyCount", categorySales)

module.exports = {monthlyCount,itemsCount,categoryCount}

