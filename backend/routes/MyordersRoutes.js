


const express = require("express")
const router = express.Router()

const Myorderscontroller = require("../controller/Myorderscontroller")


router.post("/Myorders",Myorderscontroller.MyorderRegister);
router.get("/Order",Myorderscontroller.getMyorder),

module.exports = router



