

const mongoose = require("mongoose")

const MyordersSchema = mongoose.Schema({

    username:{
        type: String,
        required: true

    },

    Phone:{
        type: Number,
        required: true

    },
    Course:{
        type: String,
        required: true

    },

    Price:{
        type: Number,
        required: true

    }

    
},{timestamps: true})


module.exports = mongoose.model("Orders", MyordersSchema)
