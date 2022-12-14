
const {userAuthSchema,User,loginAuthSchema}= require('./../models/userModel')
const catchAsync= require('./../utils/catchAsync');
const authToken =   require('./../helpers/generatetoken')



exports.signUp = catchAsync( async(req,res,next)=>{
    const results = await userAuthSchema.validate(req.body);
    const {error} =results
    if(error) 
     return res.status(400).json({
          message: error.details[0].message     
    });
    

    const user= await User.findOne({email:req.body.email})
    if(user) return res.status(400).json({
        message:'user Already exist'
    })

    
    const newUser= await User.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role,
        passwordConfirm:req.body.passwordConfirm
    });
    const token = authToken(newUser._id)
    
    res.status(200).json({
        status:true,
        token, 
        data:{
           user:newUser
        }
    });
});
