const router=require("express").Router();

const roomRouter = require("../modules/rooms/room.route");

router.use("/rooms", roomRouter)

const userRouter = require("../modules/users/user.route");

router.use("/users", userRouter)

// router.get("/:id", (req, res)=>{
//     // console.log(req?.params?.id)
//     res.json({data: `hello ${req.params.id} ${JSON.stringify(req?.params?.id)} `})
// })

// router.get("/:name", (req, res)=>{
//     console.log(req?.query)
//     res.json({data: ` ${JSON.stringify(req?.query)}`})
// })

// router.post("/", (req, res)=>{
//     console.log(req?.body)
//     res.json({ data:`${JSON.stringify(req.body)}`});
// })


module.exports=router