const mongoose = require("mongoose")
const express =  require("express")
const history = require("../models/shoppingHistory")

const router = express.Router()

router.get("/",(req,res)=>{
    history.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


router.post("/",(req,res)=>{
    history.create(req.body)
    .catch(err => console.log(err))
})

module.exports = router