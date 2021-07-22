const mongoose = require("mongoose")
const express =  require("express")
const history = require("../models/shoppingHistory")
const router = express.Router()

/* get all shopping list history */
router.get("/",(req,res)=>{
    history.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))

    history.agg
})

/* add new shopping list to history */
router.post("/",(req,res)=>{
    history.create(req.body)
    .then(res.json({message: "Ok"}))
    .catch(err => console.log(err))
})

/* get details of a shopping history  item with id passed as parameter*/
router.get("/:id",(req,res)=>{
    const id = req.params.id
    history.find({"_id": id})
    .then(data => res.json(data))
    .catch(err=> console.log(err))
})

module.exports = router