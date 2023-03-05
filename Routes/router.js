const { json } = require("body-parser");
const { response } = require("express");
const express = require("express");
const model = require("../Model/userModel")
const routes = express.Router();


//Get all Data from database
routes.route("/").get(async (req,res)=>{
    const record = await model.find()
    response.writeHead(res.statusCode)
    res.json(record)
})


//Get user id data from database
routes.route("/:id").get(async (req,res)=>{
    const record = await model.findById(req.params.id)
    response.writeHead(res.statusCode)
    res.json(record)
})


//Create user data in database
routes.route("/create").post(async (req,res)=>{
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
        res.status(res.statusCode).json(response)
    })
})


//update user id data in database
routes.route("/update/:id").patch(async (req,res)=>{
    response.writeHead(res.statusCode)
    const record = await model.findByIdAndUpdate(req.params.id,req.body)
    res.send("update successfully..")
})


//delete user id data from database 
routes.route("/delete/:id").delete(async (req,res)=>{
    response.writeHead(res.statusCode)
    const record = await model.findByIdAndDelete(req.params.id)
    res.send("delete successfully..")
})


//remove all data from database using name 
routes.route("/remove").delete(async (req,res)=>{
    response.writeHead(res.statusCode)
    const record = await model.deleteMany({name:{$eq:"Ruturaj Mengal"}})
    res.send("delete successfully..")
})

module.exports = routes;