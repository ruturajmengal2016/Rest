const {response} = require("express")
const model = require("../Model/userModel")  //schema Model 

//get all controllers
const getAll = async (req,res)=>{
    const record = await model.find()
    response.writeHead(res.statusCode)                                      //status 
    res.json(record)
}

const findOne = async (req,res)=>{
    const record = await model.findById(req.params.id)
    response.writeHead(res.statusCode)                                      //status 
    res.json(record)
}

const createUser = async (req,res)=>{
    const {name,email,phone,age} = req.body
    if(!name){
        return new Error("An error Occurred..")
    }
    const record = model.create({
        name,
        email,
        phone,
        age
    }).then((response)=>{
        res.status(res.statusCode).json(response)                              //status 
    })
}


const updateOne = async (req,res)=>{
    response.writeHead(res.statusCode)                                          //status 
    const record = await model.findByIdAndUpdate(req.params.id,req.body)
    res.send("update successfully..")
}


const deleteOne = async (req,res)=>{
    response.writeHead(res.statusCode)                                           //status 
    const record = await model.findByIdAndDelete(req.params.id)
    res.send("delete successfully..")
}


const removeAll = async (req,res)=>{
    response.writeHead(res.statusCode)                                            //status 
    const record = await model.deleteMany({name:{$eq:"Ruturaj Mengal"}})
    res.send("delete successfully..")
}


//module export
module.exports = {getAll,findOne,createUser,updateOne,deleteOne,removeAll}