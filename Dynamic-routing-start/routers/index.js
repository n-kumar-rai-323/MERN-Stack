const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ data: "Hello World" });
});

router.get("/:id", (req, res) => {
  //   console.log(req.params);
  console.log(req?.query);
  res.json({
    data: `Hello id number ${req.params.id} with query data ${JSON.stringify(
      req.query
    )}`,
  });
});
module.exports = router;
