require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const PORT = Number(process.env.PORT) || 5555;


const app = express();

mongoose.connect('mongodb://localhost:27017/adminUser').then(()=>{
console.log("Database is connect successfully")
}).catch((e)=>{
    console.log("e")
})
const indexRoute = require('./routers/index'); // Adjust the path if necessary
app.use(morgan("tiny"))
app.use(express.json())

app.use(express.static("public"));
app.use("/", indexRoute);

app.listen(PORT,()=>{
console.log(`Application running is ${PORT}`)
});