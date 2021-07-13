const express = require("express")
const route = express.Router()
const foodItems = require("../models/food_items")


route.get("/categories", (req,res)=>{
    foodItems.find()
})

route.get("/:id", (req,res) =>{
    const id = req.params.id

})

