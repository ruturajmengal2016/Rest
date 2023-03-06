const { json } = require("body-parser");
const { response } = require("express");
const express = require("express");
const { getAll, findOne, createUser, updateOne, deleteOne, removeAll } = require("../controllers/controllers"); //controllers
const routes = express.Router();


//Get all Data from database
routes.route("/").get(getAll)


//Get user id data from database
routes.route("/:id").get(findOne)


//Create user data in database
routes.route("/create").post(createUser)


//update user id data in database
routes.route("/update/:id").patch(updateOne)


//delete user id data from database 
routes.route("/delete/:id").delete(deleteOne)


//remove all data from database using name 
routes.route("/remove").delete(removeAll)

//module export
module.exports = routes;