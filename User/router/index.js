
const router=require("express").Router();

const userRouter = require("../modules/users/user.route")

router.use("/users", userRouter);

module.exports=router