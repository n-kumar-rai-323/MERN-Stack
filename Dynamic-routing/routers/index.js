const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ data: "Hello World" });
});

module.exports = router;
