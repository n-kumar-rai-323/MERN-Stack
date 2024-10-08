
const {Schema, model }= require('mongoose');


const userSchema = new  Schema({
    name : { type: String, required : true},
    password : {type: String, required:true},
    email : {type: String, required :true},
    roles : [String], default:["user"], enum:["admin", "user"],
    isActive : {type:Boolean, required:true, default:true},
    image: String
},{timestamps:true})


module.exports = new model("User", userSchema)