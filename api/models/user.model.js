let mongoose = require("mongoose")


let userSchema = new mongoose.Schema({
username:{
    type:String,
    require:true,
    unique:true
},
email:{
    type:String,
    require:true,
    unique:true
},password:{
    type:String,
    require:true
}
},{timestamps:true})


let User = mongoose.model("User",userSchema)

module.exports = User