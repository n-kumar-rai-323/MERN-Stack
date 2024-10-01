require("dotenv").config();
const express = require("express");
const PORT = Number(process.env.PORT) || 8000;
const app = express();

const indexRouter = require("./routes");


app.use("/", indexRouter);




app.listen(PORT, () => {
  console.log(`application is running on port ${PORT}`);
});
