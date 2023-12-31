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
    type:Number,
    require:true,
    unique:true
}
},{timestamps:true})


let User = mongoose.model("User",userSchema)


export default User