

const express = require("express")

//importing filee from controll 

const usercontroller = require("../controller/usercontroller")

//making routes for register
const router = express.Router()

router.post("/registers",usercontroller.registeruser)

router.post("/users/login",usercontroller.loginUser)


module.exports = router