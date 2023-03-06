const {model,Schema} = require("mongoose");  //import mongoose module 


// user schema 
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number, 
        required:true
    },
    phone:{
        type:Number, 
        required:true
    },
    email:{
        type:String, 
        required:true
    }
},{
    timeseries:true
}) 


//module export
module.exports = model("user",userSchema)