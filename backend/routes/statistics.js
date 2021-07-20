const history = require("../models/shoppingHistory")
const mongoose = require("mongoose")
const express =  require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    history.aggregate([
        {$match: {"items.food.name": "ca"}},
        { $group: {
            _id: "$items.food.name"
        }},
    ])
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

module.exports = router