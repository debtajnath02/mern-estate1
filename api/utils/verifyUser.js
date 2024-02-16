const errorHandeler = require("./error")
let  jwt = require("jsonwebtoken")
let verifyToken = (req,res, next)=>{
let token = req.cookies.access_token
if (!token) return next(errorHandeler(401, "Unauthorized"))
jwt.verify(token, process.env.JWT_SECRET,(err, user)=>{
if(err) return next(errorHandeler(403, "Forbidden"))
req.user = user
next()
})
}

module.exports.verifyToken = verifyToken