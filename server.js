const express = require("express");
const errorHandler = require("./Middleware/middleware");
const routes = require("./Routes/router");
require("dotenv").config()
const app = express();
app.use(express.json())
app.use(errorHandler.errorHandler)
app.use(errorHandler.applicationErrorHandler)
app.use("/api",routes)




app.listen(process.env.PORT, async (req,res)=>{
    await require("./Config/Dbconnection")
    console.log(`server is listening on ${process.env.PORT}`)
})

