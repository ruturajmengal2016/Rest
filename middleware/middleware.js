
const errorHandler = (err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("Something Wrong!")
}

const applicationErrorHandler = (req, res, next) => {
    console.log('Time:', Date.now());
    next();
  }
  
module.exports = {errorHandler,applicationErrorHandler}