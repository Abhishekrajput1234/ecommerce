const mongoose = require ('mongoose')

const contactformschema = new mongoose.Schema({

    username:{type: String, required: true},
    email:{type:String, required:true},
    phone:{type:String, required:true},
    subject:{type:String, required:true},
    message:{type:String, required:true}

})

const ContactForm = mongoose.model("contactform",contactformschema)

module.exports = ContactForm