const router = require("express").Router();
const multer = require('multer')
const userController = require("./user.controller")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "." + file?.originalname.split(".")[1]);
    },
});

const upload = multer({ storage })

// RBACK (role based access control)

const checkRole = (sysRoles)=>{
    return (req, res, next)=>{
        try{
            const {roles: userRole = []} = req.headers; 
            const isValidRole = sysRoles.some((role)=>userRole.includes(role));
            if(!isValidRole) throw new Error("User unauthorized");
            next();
        }catch(e){
            next(e)
        }
    }
}

router.get("/",checkRole(["admin"]),(req, res, next)=>{
    try{
        const valueOne = 45;
        const valueTwo = 70;
        const totalSum = valueOne + valueTwo

    res.json({data : `The Total sum of ${totalSum}`})
    }catch(e){
        next(e);
    }
})
router.post("/register", upload.single('profilePic'), (req, res, next) => {
    try {
        console.log({ pic: req.file })
        const URL = "http://localhost:7000/resources/uploads/";
        const myPicture = URL + req?.file?.filename;
        res.json({ data: `User Registered Successcully in url ${myPicture}` })
    } catch (e) {
        next(e)
    }
})

const verify = (req, res, next) => {
    const role = req.headers.role;


    if (role === "admin") {
        next();
    } else {
        throw new Error("You are not authorize")
    }
};


router.get("/", verify, (req, res, next) => {
    //query

    try {
        let randomNumber = Math.floor(Math.random() * 10) + 1
        if (randomNumber > 5) {
            res.json({ data: `Random Number is ${randomNumber}` })
        } else {
            throw new Error(`${randomNumber}`)
        }

    }
    catch (err) {
        next(err);
    }
});

// read one data
router.get("/:id", (req, res) => {
    //query
    res.json({ data: `get data from user is ${req?.params?.id}` })
});

//Create
router.post("/", async(req, res) => {
    //body
    const result = await userController.create(req.body);
    // console.log(req.body)
    res.json({ data:result, msg: "User created successfully" })
});

//Update
router.put("/:id", (req, res) => {
    //param + body 
    res.json({ data: "Hello from put users" })
});

//Update
router.patch("/:id", (req, res) => {
    // params + body 
    res.json({ data: "Hello from patch users" })
});

//Delete
router.delete("/:id", (req, res) => {
    //params
    res.json({ data: "Hello from deleteusers" })
});

module.exports = router;