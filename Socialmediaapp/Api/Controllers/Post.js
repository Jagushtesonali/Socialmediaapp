import Post from "../Models/Post.js"


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
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)

    } catch (error) {
        next(error)
    }
}
//getallpost
export const getallpost = async(req,res,next)=>{
    try {
        
    const posts = await Post.find()
    res.status(200).json(posts)


    } catch (error) {
        next(error)
    }
}

//like

export const likepost = async(req,res,next)=>{
    const id =await req.user.id
    const postid = await req.params.videoid
    try {
      const post = await Post.findById(req.params.id)
      if (!post.likes.includes(id)) {
            await post.updateOne({$push:{likes:id}})
      } else {
        await post.updateOne({$pull:{likes:id}})
      }
        
   
    
    } catch (error) {
     next(createerror(500,"something went wrong"))
     console.log(error)
    }

    
}