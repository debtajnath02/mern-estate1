let express = require("express");
const { test } = require("../controller/user.controller.js");
let router = express.Router();

router.get("/",test);
module.exports = router;  // Change this line
