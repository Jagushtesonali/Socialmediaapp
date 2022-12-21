import { createerror } from "./Createerror.js"
import jwt from 'jsonwebtoken'

export const verifytoken = (req,res,next)=>{

const token = req.cookies.accesstoken
if(!token ){return next(createerror(500,"You are not authinticated"))}

jwt.verify(token,process.env.JWT,(err,user)=>{
    if(err){return next(createerror(404,"token not valid"))}
    req.user=user
    next()
})


}