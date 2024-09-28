const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("hellow world");
});


app.listen(5000,()=>{
    console.log("application running")
})