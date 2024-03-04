

const express = require("express")
const router = express.Router()

const contactcontroller = require("../controller/contactcontroller")


router.post("/contact",contactcontroller.contactRegister);
router.get("/cantactg/data",contactcontroller.getContact),

module.exports = router