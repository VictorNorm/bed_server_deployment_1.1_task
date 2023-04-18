var express = require("express");
var router = express.Router();
var jsend = require("jsend");
router.use(jsend.middleware);
/* GET home page. */
router.get("/", function (req, res, next) {
  res.jsend.success({ message: "hello world" });
});

module.exports = router;
