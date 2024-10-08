const router = require("express").Router();
const roomController = require("./user.controller");
const multer = require("multer")

const storage = multer.diskStorage({
    destination : function(req, file,cb){
        cb(null, "public/uploads")
    },
    filename: function(req,file,cb){
        cb(null, Date.now() +"." + file.originalname.split(".")[1]);
    }
})

const upload = multer({storage});
// router.post("/",async(req,res)=>{
//     const result =await roomController.create(req.body) 
//     res.json({data: result, msg :"connect successfully "})
// })

router.post("/register", upload.single('image'), async(req,res,next)=>{
    try{
        console.log(req.file)
        const URL = "http://localhost:5555/uploads/";
        const image = URL + req?.file?.filename;
        if(req?.file?.filename){
            req.body.image= image
        }
        const result = await roomController.create(req.body);
        res.json({data:result, msg: `User Registered successfully `});
    }catch(e){
        next(e)
    }
})

module.exports = router;