const {model,Schema} = require("mongoose");

const userSchema = new Schema({
    name:{type:String},
    age:{type:Number},
    phone:{type:Number},
    email:{type:String}
}) 

module.exports = model("user",userSchema)