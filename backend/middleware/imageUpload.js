
const multer = require("multer")

const imagelocacation = multer.diskStorage({
    destination:(req, file ,cb)=>{
        cb(null,"learninImage")
    },
    filename:(req, file ,cb)=>{
        cb(null, file.originalname)
    }
})

const uploadImage =multer({
    storage: imagelocacation
})

module.exports = uploadImage