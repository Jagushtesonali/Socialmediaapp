import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PlaceIcon from '@mui/icons-material/Place';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import './Post.scss'
import Comment from '../Comment/Comment';
import { useDispatch, useSelector } from 'react-redux';
import {format} from 'timeago.js'
import { Link } from 'react-router-dom';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { postlike } from '../../Redux/Postslice';


function Post({type,posts,post}) {
   
    const {currentUser}= useSelector((state)=>state=>state.user)
    const {userspost}= useSelector((state)=>state=>state.post)
    const [showcomment,setshowcomment]= useState(false)
    const dispatch = useDispatch()
    const[user ,setuser]=useState(null)
useEffect(() => {

    const fetchuser = async()=>{
      
        const res = await axios.get(`/api/user/${type ? posts?.userid:post?.userid}`)
           setuser(res.data)
    }
    fetchuser()


}, [type ? posts?.userid:post?.userid])


const handlelike = async()=>{

const res = await axios.put(`/api/post/like/${type?posts._id:post._id}`)
dispatch(postlike(currentUser?._id))

}




  return (
  <>
  <div className='post-container'>
  {type &&  <div className='addpost'>
        <div className='userdetail'>
        <img src={currentUser?.profile} alt="" style={{width:"25px",height:"25px",borderRadius:"50%",objectFit:"cover"}}/>
            <input type="text" placeholder='What is in your mind ?' />
        </div>
        <div className='postaddicon'>
          <InsertPhotoIcon/><span> Add photo</span>
          <PlaceIcon/> <span>Place</span>
          <Diversity3Icon/><span>Tag friends</span>
        </div>
    </div>}
   
        <div className='post'>
        <div className='userinfo'> 
            <img src={user?.profile}  alt="" />
            <div>
            <Link to={type ?`/profile/${posts?.userid}`:`/profile/${post?.userid}`}style={{textDecoration:"none",color:"black"}}>     <span>{user?.name}</span> </Link>
                <small>{format(posts?.createdAt)}</small>
            </div>
        </div>
        <p>{type ? posts?.desc : post?.desc}</p>
        <img src={type ? posts?.imgurl : post?.imgurl} alt="" className='postimg'/>
        <div className='posticons'>
      <span style={{display:"flex",alignItems:"center",gap:"5px" ,cursor:"pointer"}} onClick={handlelike}>{type ?posts.likes.includes(currentUser?._id)?<FavoriteIcon style={{color:"red"}}/>:<FavoriteBorderIcon style={{color:"red"}}/>:post.likes.includes(currentUser?._id)?<FavoriteIcon style={{color:"red"}}/>:<FavoriteBorderIcon style={{color:"red"}}/>}<span>{type ? posts?.likes.length : post?.likes.length}</span></span>   
         <InsertCommentIcon/> <span style={{cursor:"pointer"}} onClick={()=>{setshowcomment(!showcomment)}}>comments</span>
         <ShareIcon/><span>Share</span>
        </div>
      {showcomment &&  <Comment/>}
    </div>
    
    
  
  </div>
  
  </>
  )
}

export default Post
