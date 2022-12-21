import bcryptjs from 'bcryptjs'
import { createerror } from '../Createerror.js';
import User from '../Models/User.js'
import jwt from 'jsonwebtoken'


export const register = async(req,res,next)=>{

   try {
   
   const salt = await bcryptjs.genSaltSync(10);
   const hash = await bcryptjs.hashSync(req.body.password,salt);
   const user = new User({...req.body,password:hash})
   const saveuser = await user.save()
   res.status(200).send("user has been created").json(saveuser)
    
   } catch (error) {
    return next(createerror(500,"Email exist"))
    
   }



}

export const login = async(req,res,next)=>{

   try {
      const user = await User.findOne({email:req.body.email})
      if(!user) return next(createerror(404,"User not found"))
      const iscorrect = await bcryptjs.compare(req.body.password,user.password)
      if(!iscorrect) return next(createerror(404,"wrong Credentials"))
      
      const token = jwt.sign({id:user._id},process.env.JWT)
      const {password ,...others}=user._doc
      res.cookie("accesstoken",token,{
         httponly:true
      }).status(200).json(others)
   } catch (error) {

      next(error)
   }



}