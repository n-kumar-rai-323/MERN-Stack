const {Schema, model} = require("mongoose");

const roomSchema = new Schema(
    {
        number:{
            type:Number,
            required : true,
            unique:true,
        },
        isFilled: {
            type:Boolean,
            default:false,
        },
        isPetAllowed:{
            type : Boolean, 
            default:false
        },
        type:{
            type:String,
            enum:["single","double","suite"],
            default:"single"
        },
    },{timestamps:true}
)

module.exports = new model("Room", roomSchema)