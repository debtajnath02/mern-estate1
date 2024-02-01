let express = require("express")
const { signUp, signIn, google } = require("../controller/auth.controller.js")

let router = express.Router()

router.post("/signup", signUp)
router.post("/signin", signIn)
router.post("/google", google)


module.exports = router