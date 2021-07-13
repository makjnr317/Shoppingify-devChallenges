const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express()
const categories = "./routes/categoriesRoutes"
const foodItem = "./routes/foodItemsRoutes"

app.use(express.json())
dotenv.config()

const port = process.env.PORT
const dbURI = process.env.dbURI


mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        app.listen(port, ()=>{
            console.log(`Listening at port ${port}`)}
    ))
    .catch(err => console.log(ertt))


app.use("/api/categories",categories)
app.use("/api/foodItem",foodItem)

app.use((req,res) =>{
    res.status(404).json({error: "not found"})
})



