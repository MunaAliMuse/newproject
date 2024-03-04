
 const mongoose = require("mongoose")
const contactSchema = mongoose.Schema({


    firstName:{
        type: String,
         required: true
        
    },


    lastName:{
        type: String,
         required: true
        
    },

    email:{
        type: String,
         required: true
        
    },
    password:{
        type: String,
         required: true
        
    },
    subjectName:{
        type: String,
         required: true
        
    },


},{timestamps: true})

module.exports = mongoose.model("contact", contactSchema)
