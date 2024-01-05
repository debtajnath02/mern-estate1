const  User  = require("../models/user.model")
let bcryptjs = require("bcryptjs")
let signUp = async(req,res)=>{
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
    res.status(500).json(error)
}
}

module.exports.signUp = signUp