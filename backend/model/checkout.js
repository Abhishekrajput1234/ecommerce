const mongoose = require('mongoose')

const check = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    address:{type:String, required:true},
    phone:{type:String, required:true},
    pincode:{type:Number, required:true},
})

module.exports = mongoose.model("checkout", check)