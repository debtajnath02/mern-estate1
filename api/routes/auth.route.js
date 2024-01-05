let express = require("express")
const { signUp } = require("../controller/auth.controller")

let router = express.Router()

router.post("/", signUp)


module.exports = router