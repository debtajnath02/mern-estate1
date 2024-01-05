let  errorHandeler = (statusCode, massage)=>{
let error = new Error()
error.statusCode = statusCode
error.message = massage
return error
}
module.exports = errorHandeler