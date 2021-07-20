const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express()
const foodItem = require("./routes/foodItemsRoutes")
const history = require("./routes/shoppingList")
const statistics = require("./routes/statistics")
app.use(express.json())
dotenv.config()

const port = process.env.PORT
const dbURI = process.env.dbURI


mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        app.listen(port, ()=>{
            console.log(`Listening at port ${port}`)
        })
        )
    .catch(err => console.log(err))

mongoose.set('useFindAndModify', true);

app.use("/api/fooditems", foodItem)
app.use("/api/history", history)
app.use("/api/statistics", statistics)

app.use((req,res) =>{
    res.status(404).json({error: "not found"})
})



