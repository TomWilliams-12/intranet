var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    {
      id: 1,
      username: "test01",
    },
    {
      id: 2,
      username: "test02",
    },
  ]);
});

module.exports = router;
