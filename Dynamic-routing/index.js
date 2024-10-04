require("dotenv").config();
const express = require("express");
const morgan = require('morgan')
const app=express()

const PORT = Number(process.env.PORT) || 8000
const indexRoute = require("./routers")

app.use(morgan('tiny'))
app.use(express.json())
app.use("/resources", express.static("public"))


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