const express = require("express")
const router = express.Router()

const foodItems = require("../models/food_items")


/* get all food items grouped by category */
router.get("/", (req,res) =>{
    foodItems.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


/* get details of a food item with id passed as parameter*/
router.get("/:id",(req,res)=>{
    const id = req.params.id
    const check = (food) => food["_id"] == id

    foodItems.find({"food._id": id})
    .then(data => res.json(data[0]["food"][data[0]["food"].findIndex(check)]))
    .catch(err=> console.log(err))
})

router.delete("/:id",(req,res)=>{
    const id = req.params.id

    foodItems.updateOne(
            {"food._id": id},
            {$pull : {food : {_id: id}}})
    .then(data => res.json(data))
    .catch(err=> console.log(err))
})

/* add food item to category. create category if non-existant */
router.post("/",(req,res)=>{
    foodItems.updateOne({category: req.body.category},{$push:{food: req.body.food}},{upsert:true})
    .then(res.json({message:true}))
    .catch(err=> console.log(err))
})



module.exports = router