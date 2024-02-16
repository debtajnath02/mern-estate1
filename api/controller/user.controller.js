const User = require("../models/user.model")
const errorHandeler = require("../utils/error")
let bcryptjs = require("bcryptjs")

  let test = (req,res)=>{
    res.send("fgfhbfg")
    }

let updateUser = async(req,res, next)=>{
if(req.user.id !== req.params.id) return  next(errorHandeler(403, "you can only update your own account"))
try {
  if (req.body.password){
    req.body.password = bcryptjs.hashSync(req.body.password, 10)
  }
  let updatedUser = await User.findByIdAndUpdate(req.params.id, {
    $set:{
      username:req.body.username,
      password:req.body.password,
      email:req.body.email
    }
  },{new:true})


  let {password, ...rest} = updatedUser._doc
res.status(200).json(rest)
} catch (error) {
  next(error)
}
}

    module.exports.test = test
    module.exports.updateUser = updateUser