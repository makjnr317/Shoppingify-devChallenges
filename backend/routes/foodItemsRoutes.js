const express = require("express")
const router = express.Router()
const foodItems = require("../models/food_items")


router.get("/", (req,res) =>{
    foodItems.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


router.post("/",(req,res)=>{
    foodItems.updateOne({category: req.body.category},{$push:{food: req.body.food}},{upsert:true})
    .then(res.json({message:true}))
    .catch(err=> console.log(err))
})

module.exports = router