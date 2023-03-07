const express = require("express"); //web framework
// const {errorHandler,applicationErrorHandler} = require("./Middleware/middleware"); //Middleware for error handler
const routes = require("./Routes/router");  //Router
require("dotenv").config() //env variables
const app = express();
app.use(express.json()) //body parser
const errorHandler = (err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("Something Wrong!")
}

const applicationErrorHandler = (req, res, next) => {
    console.log('Time:', Date.now());
    next();
  }
app.use(errorHandler) //error Handler
app.use(applicationErrorHandler)
app.use("/api",routes) // api routes



//server and database
app.listen(process.env.PORT, async ()=>{
    await require("./Config/Dbconnection")
    console.log(`server is listening on ${process.env.PORT}`)
})

