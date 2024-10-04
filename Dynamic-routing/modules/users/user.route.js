const router = require("express").Router();
const multer = require('multer')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "." + file.originalname.split(".")[1])
    }
})

const upload = multer({ storage })
// const upload = multer({ dest: 'public/uploads/' })

const verify = (req, res, next) => {
    const role = req.headers.role;


    if (role === "admin") {
        next();
    } else {
        throw new Error("You are not authorize")
    }
};


router.post("/register", upload.single('profilePic'), (req, res, next) => {
    try {
        console.log({ pic: req.file })
        const URL = "http://localhost:7000/resources/uploads/";
        const myPicture = URL + req?.file?.filename
        res.json({ data: `User Registered Successcully${myPicture}` })
    } catch (e) {
        next(e)
    }
})
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
router.post("/", (req, res) => {
    //body
    console.log(req.body)
    res.json({ data: "Hello from post users" })
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