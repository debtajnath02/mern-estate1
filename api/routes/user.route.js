let express = require("express");
const { test, updateUser } = require("../controller/user.controller.js");
const { verifyToken } = require("../utils/verifyUser.js");
let router = express.Router();

router.get("/test",test);
router.post("/update/:id",verifyToken, updateUser);
module.exports = router;  // Change this line
