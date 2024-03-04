
const express = require("express")
const router = express.Router()

const Learningcontroller = require("../controller/Learningcontroller")

const imageUpload = require("../middleware/imageUpload")
router.post("/learning",imageUpload.single("image"),Learningcontroller.LearningRegister);
router.get("/learrning/data",Learningcontroller.getLearning),

// router.get("/products/single/:id",productController.getsingleData),


module.exports = router