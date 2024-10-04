require("dotenv").config();
const express = require("express");
const morgan = require('morgan')
const mongoose = require("mongoose");
const app=express()

const PORT = Number(process.env.PORT) || 8000
const indexRoute = require("./routers")


mongoose.connect("mongodb://localhost:27017/hotel-mgmt").then(()=>{
    console.log("Database is connected");
})
.catch((e)=>{
    console.log("Database Error");
})

app.use(morgan('tiny'))
app.use(express.json())
app.use("/resources", express.static("public"));


app.use((req,res,next)=>{
    req.body.country = "Nepal";
    next();
});




app.use("/", indexRoute)

app.use((err, req,res, next)=>{
    const errMsg = err? err.toString() : "Something went wrong!";
    res.status(500).json({data:"", msg:errMsg});
    next()
})
app.listen(PORT, ()=>{
    console.log(`Application running ${PORT}`)
})