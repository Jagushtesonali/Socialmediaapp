import { createerror } from "../Createerror.js"
import Post from "../Models/Post.js"
import User from "../Models/User.js"


//createpost
export const createpost = async(req,res,next)=>{
   try {

    const newpost = new Post(req.body)
    const savepost = await newpost.save()
   return res.status(200).json(savepost)
    
   } catch (error) {
    next(error)
    
   }
    

}
//deletepost
export const deletepost = async(req,res,next)=>{

    try {

        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json("post deleted")
        
    } catch (error) {
        next(error)
    }



}
//updatepost
export const updatepost = async(req,res,next)=>{

try {

    const updatedpost = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json(updatedpost)
    
} catch (error) {
    next(error)
}




}
//getpost
export const getpost = async(req,res,next)=>{
    try {
        const post = await Post.find({userid:req.params.id})
        res.status(200).json(post)

    } catch (error) {
        next(error)
    }
}

//getallpost timeline
export const getallpost = async(req,res,next)=>{
    try {
        
   const currentuser = await User.findById(req.params.id)
   const usersposts = await Post.find({userid:currentuser._id})
   const friendspost = await Promise.all(
            currentuser.Followedusers.map((friendid)=>{
          return     Post.find({userid:friendid})
            })
   )
   res.status(200).json(usersposts.concat(...friendspost))

    } catch (error) {
        next(error)
    }
}

//like

export const likepost = async(req,res,next)=>{
   
    const id =await req.user.id
   
    try {
      const post = await Post.findById(req.params.id)
      if (!post.likes.includes(id)) {
            await post.updateOne({$push:{likes:id}})
            return res.status(200).json("post liked")  
      } else {
        await post.updateOne({$pull:{likes:id}})
        return   res.status(200).json("post disliked")  
      }
  
   
    
    } catch (error) {
     next(createerror(500,"something went wrong"))
     console.log(error)
    }

    
}