const router =require("express").Router()
const userController = require("./user.controller");
const multer = require('multer')

router.get("/",(req,res)=>{
    res.json({data: "From get User"});
});




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "." + file?.originalname.split(".")[1]);
    },
});

const upload = multer({ storage })
router.post("/register", upload.single('profilePic'), async (req, res, next) => {
    try {
        console.log({ pic: req.file })
        const URL = "http://localhost:7000/resources/uploads/";
        const image = URL + req?.file?.filename;
        if(req?.file?.filename){
            req.body.image = image;
        }
      
        const result = await userController.register(req.body);
        res.json({ data: result, msg:"User Registered successfully"});
    } catch (e) {
        next(e)
    }
});

// router.post("/", async(req, res, next) => {
//     //body
//     try{
//     const result = await userController.create(req.body);
   
//     res.json({ data:result, msg: "User created successfully" })
//     }catch(e){
//         next(e);
//     }
// });


module.exports = router