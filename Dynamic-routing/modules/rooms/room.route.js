const router = require("express").Router();

router.get("/",(req,res)=>{
    try{
        let randomNumber = Math.floor(Math.random()*10)+1
        if(randomNumber > 5){
            res.json({data: "Hello from "})
        }else{
            console.log("Error")
        }
        
    }
    catch(err){
        console.log(`the ${err}`)
    }
});

router.post("/",(req,res)=>{
    console.log(req.body)
    res.json({data: "Hello from post room"})
});

router.put("/",(req,res)=>{
    res.json({data: "Hello from put room"})
});

router.patch("/",(req,res)=>{
    res.json({data: "Hello from patch room"})
});

router.delete("/",(req,res)=>{
    res.json({data: "Hello from delete room"})
});

module.exports =router;