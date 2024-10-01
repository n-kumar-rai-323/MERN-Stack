const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ data: "Hello get" });
});

router.post("/", (req, res) => {
  res.json({ data: "Hello post" });
});

router.patch("/", (req, res) => {
  res.json({ data: "Hello patch" });
});

router.put("/", (req, res) => {
  res.json({ data: "Hello put" });
});

router.delete("/", (req, res) => {
  res.json({ data: "Hello Delete" });
});
module.exports = router;
