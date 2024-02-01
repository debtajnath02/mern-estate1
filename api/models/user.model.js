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
},
avatar:{
    type:String,
    default:"https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="
}
},{timestamps:true})


let User = mongoose.model("User",userSchema)

module.exports = User