1. Hello world server
2. CRUD route
   GET => data from server to client
   POST => new data insert from client to server (Add new user)
   PUT=> multiple data field update from client to server (booking date, on of persons)
   PATCH=> single field update from client to server
   DELETE => remove data from database
3. Separation of Concern (module)
   1.routes => index.js
   const router = require("express").Router();
   module.exports = router;
4. index.js
   const indexRouter = require("./routes");
   app.use("/", indexRouter);

5. Dynamic Routing

to make express-routing setup

- npm init -y
- npm i --save express dotenv
- npm i --save-dev nodemon

"scripts": {
"start": "nodemon ."
},
