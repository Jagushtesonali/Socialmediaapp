import { createerror } from "../Createerror.js"
import Post from "../Models/Post.js"
import User from "../Models/User.js"


//upadate user
export const updateuser = async(req,res,next)=>{
if (req.params.id == req.user.id) {
    try {

        const newuser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(newuser)
        
    } catch (error) {
        next(error)
    }

} else {
  return  next(createerror(404,"you are not authinticated"))
    
}


}
//get user
export const getuser = async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        if(!user) {return next(createerror(404,"user not found"))}
        
   return     res.status(200).json(user)

    } catch (error) {
        next(error)
        
    }
}
//delete user
export const deleteuser = async(req,res,next)=>{
     
    if (req.params.id== req.user.id) {
       try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user has been deleted")

       } catch (error) {
        next(error)
       } 
       
    } else {
        next(createerror(404,"you are not authintacated"))
    }
}
//follow user
export const followuser = async(req,res,next)=>{

if (req.params.id==req.user.id) {
    if (req.params.id !== req.body.userid) {
        try {

            const currentuser = await User.findById(req.body.userid)
            const mainuser = await User.findById(req.params.id)
            if (!mainuser.Followedusers.includes(currentuser._id)) {
                await mainuser.updateOne({$push:{Followedusers:req.body.userid}})
                await currentuser.updateOne({$inc:{followers:1}})
                return   res.status(200).json("user followed")

            } else {
                await mainuser.updateOne({$pull:{Followedusers:req.body.userid}})
                await currentuser.updateOne({$inc:{followers:-1}})

                return  res.status(200).json("user unfollowed")

            }
            
        } catch (error) {
            next(error)
        }
    } else {
        next(createerror(500,"you cant follow yourself"))
    }


} else {
    next(createerror(404,"you are not authinticated"))
}

}
//unfollow user
//like post
