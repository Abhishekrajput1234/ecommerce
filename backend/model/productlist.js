const mongoose = require("mongoose")

const product = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },

    stock:{
        type:Number,
        required:true,
        default:0,
        min:0
    },

    featured:{
        type:Boolean,
        default:false
    }

})

module.exports = mongoose.model("productlist", product)