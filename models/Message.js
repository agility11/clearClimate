const Joi = require("joi");
const mongoose= require("mongoose")

const messageSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});
 const Message= mongoose.model("Message",messageSchema)
 const messageAuthSchema = Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    message:Joi.string().required(),
 })
 module.exports.Message=Message
 module.exports.messageAuthSchema=messageAuthSchema