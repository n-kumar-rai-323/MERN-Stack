require("dotenv").config();
const express = require("express");
const PORT = Number(process.env.PORT) || 9000;
const app = express();

const indexRouter = require("./routers");
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
