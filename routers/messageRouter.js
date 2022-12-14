
const express=require("express");
const messageControllers= require("./../controllers/messageController");
const isAuth = require('./../middleware/authMiddleware');
const router=express.Router();


router.get("/",isAuth.Protected, isAuth.Restrict('admin', 'vc-admin'),messageControllers.getMessages);
router.post("/",isAuth.Protected,messageControllers.postMessage);

module.exports=router;