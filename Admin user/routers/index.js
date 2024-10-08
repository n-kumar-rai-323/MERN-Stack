const router = require("express").Router();

// router.get("/",(req,res)=>{
//     res.json({data: "Hello from Get Route"})
// });

const userRoute =require("../modules/users/user.route")

router.use("/users", userRoute)

module.exports= router;

// const router = require('express').Router();


// // Define your routes
// router.get('/', (req, res) => {
//   res.send('Welcome to the homepage!');
// });

// // Export the router instance correctly
// module.exports = router;