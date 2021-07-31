const history = require("../models/shoppingHistory")
const mongoose = require("mongoose")
const express =  require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    var date, months = {}, count = 0, months = {}, foods = {}, categories = {}
    history.find()
    .then(data => {
        data.forEach(i => {
            count = 0
            date = `${i["date"].getFullYear()}-${i["date"].getMonth()}`
            if (!Object.keys(months).includes(date)){
                months = {
                    ...months,
                    [date] : 0
                }
            }
            i.items.forEach(j => {
                if (!Object.keys(categories).includes(j.category)){
                    categories = {
                        ...categories,
                        [j.category] : 0
                    }
                }
                j.food.forEach(f =>{
                    categories[j.category] += f.number
                    if (!Object.keys(foods).includes(f.name)){
                        foods = {
                            ...foods,
                            [f.name] : 0
                        }
                    }
                    foods[f.name] += f.number
                    months[date] += f.number
                })
            });
        });
        res.json({foods,categories,months})
    })
    .catch(err => console.log(err))
})

module.exports = router