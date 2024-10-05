const router = require("express").Router();
const roomController = require("./room.controller");

//list 
router.get("/",async(req, res, next)=>{
    try{
        const result = await roomController.list();
        res.json({data:result , msg:"List of all rooms found successfully"});
    }catch(e){
        next(e);
    }
   
});


//getById
router.get("/:id",async(req, res, next)=>{
    try{
        const result = await roomController.getById(req?.params.id)
        res.json({data: result, msg: "Room found successfully"});
    }catch(e){
        next(e);
    }
   
});

//create 
router.post("/",async(req, res, next)=>{
    try{
        const result = await roomController.create(req.body);
        res.json({data:result, msg:"Room created successfully"});
    }catch(e){
        next(e);
    }
   
});

//update
router.put("/:id",async(req, res, next)=>{
    try{
        const result = await roomController.updateById(req?.params?.id, req.body);
        res.json({data:result, msg:"Room updated successfully"});
    }catch(e){
        next(e);
    }
   
});

//update Status
router.patch("/:id",async(req, res, next)=>{
    try{
        const result = await roomController.updateStatus(req?.params?.id);
        res.json({data:result, msg:"Room status updated successfully"});
    }catch(e){
        next(e);
    }
   
});

//delete
router.delete("/:id",async(req, res, next)=>{
    try{
        const result = await roomController.remove(req?.params?.id);
        res.json({data:result, msg:"Room deleted successfully"});
    }catch(e){
        next(e);
    }
   
});



module.exports =router;