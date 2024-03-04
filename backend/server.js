

const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())

app.listen(1000, (req,res)=>{
    console.log("server is running")

})

mongoose.connect("mongodb://localhost:27017/onlineLearning").then((req,res)=>{
    console.log("database has been connect succefull")
}).catch((error)=>{
    console.log(error)
})

const learningRoutes = require("./routes/learningRoutes")

const userRoutes= require("./routes/userRoutes")
const contactRoutes = require("./routes/contactRoutes")
const MyodersRoutes = require("./routes/MyordersRoutes")
app.use("/images",express.static("learninImage"))

app.use(userRoutes)
app.use(MyodersRoutes)
app.use(learningRoutes)
app.use(contactRoutes)
