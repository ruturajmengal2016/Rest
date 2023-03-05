const mongoose = require("mongoose")
module.exports =  mongoose.connect(process.env.CONNECTION).then(()=>{
    console.log("Connected Successfully....")
}).catch((error)=>{
    console.log(error)
})
 