const express = require("express"); //web framework
const errorHandler = require("./Middleware/middleware"); //Middleware for error handler
const routes = require("./Routes/router");  //Router
require("dotenv").config() //env variables
const app = express();
app.use(express.json()) //body parser
app.use(errorHandler.errorHandler) //error Handler
app.use(errorHandler.applicationErrorHandler)
app.use("/api",routes) // api routes



//server and database
app.listen(process.env.PORT, async (req,res)=>{
    await require("./Config/Dbconnection")
    console.log(`server is listening on ${process.env.PORT}`)
})

