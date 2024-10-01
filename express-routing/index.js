require("dotenv").config();
const express = require("express");
const PORT = Number(process.env.PORT) || 8000;

const app = express();

app.get("/", (req, res) => {
  res.json({ data: "Hello get" });
});

app.post("/", (req, res) => {
  res.json({ data: "Hello post" });
});

app.patch("/", (req, res) => {
  res.json({ data: "Hello patch" });
});

app.put("/", (req, res) => {
  res.json({ data: "Hello put" });
});

app.delete("/", (req, res) => {
  res.json({ data: "Hello Delete" });
});

app.listen(PORT, () => {
  console.log(`application is running on port ${PORT}`);
});
