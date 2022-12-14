
const { messageAuthSchema, Message } = require("../models/Message");
const catchAsync= require('./../utils/catchAsync');

const postMessage= catchAsync(async function(req,res,next){
   
        const result= await messageAuthSchema.validate(req.body);
        
    const {error}=result;
    if(error)return res.status(404).json({
        error:error.details[0].message
    });
    const newMessage={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        message:req.body.message
    };
    const created= await Message.create(newMessage)
    res.status(200).json({
        success:true,
        result:created
    });
});

const getMessages= catchAsync(async function(req,res,next){
   
        const messages=await Message.find();
        res.status(200).json({
            success:true,
            result:messages
        });
});


module.exports={
    postMessage,
    getMessages
}