require("dotenv").config();
bcrypt = require('bcryptjs');
const express = require("express");
const mongoose = require("mongoose")
const POST = Number(process.env.POST) || 4580;

const app =express();
app.use(express.json());

const indexRoute = require("./router")
app.use("/", indexRoute);

mongoose.connect("mongodb://localhost:27017/acer")
  .then(() =>{
    console.log("Database is connected succefully ")
  })
  .catch((e)=>{
    console.log(e);
  })

app.listen(POST,()=>{
    console.log(`Application running is ${POST}`);
});
