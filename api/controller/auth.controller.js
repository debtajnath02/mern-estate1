const  User  = require("../models/user.model")
let bcryptjs = require("bcryptjs")
const errorHandeler = require("../utils/error")

let signUp = async(req,res, next)=>{
let {username, email, password} = req.body
let hashedPassword = bcryptjs.hashSync(password, 10)
password = hashedPassword
let newUser = new User({username, email, password:hashedPassword})
console.log(req.body, hashedPassword);
console.log(hashedPassword);
try {
    
await newUser.save()
res.status(201).json("user created successfylly")
} catch (error) {
    next(error)
}
}

module.exports.signUp = signUp