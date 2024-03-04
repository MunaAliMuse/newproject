

const mongoose = require("mongoose")
const learningSchema = mongoose.Schema({


    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },


    image:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    }
    
   


}, {timestamps: true})


module.exports = mongoose.model ("learning",learningSchema)




