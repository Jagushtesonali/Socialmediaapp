import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PlaceIcon from '@mui/icons-material/Place';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import './Post.scss'
import Comment from '../Comment/Comment';
function Post({type}) {
    const [showcomment,setshowcomment]= useState(false)
    const postdata = [
        {
            profile:"https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
            name:"Chetan Gangan",
            desc:" Nature image ❤",
            postimage:"https://th.bing.com/th/id/OIP.XprF7kKAac989M24xSlBVgHaE8?pid=ImgDet&w=1920&h=1280&rs=1"

        },
        {
            profile:"https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
            name:"Sayali Jagushte",
            desc:"First post on facebook by me",
            postimage:"https://th.bing.com/th/id/R.3a9f0210ff7d1e83039ff237c81bacae?rik=asArcL6qvWfZfA&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2016%2f03%2f29%2fbeautiful-nature-high-definition_042323787_304.jpg&ehk=8tO7UxFL%2bC03x6vfc2O9EhdUCe4fl6tC7UGUdlnpdX4%3d&risl=&pid=ImgRaw&r=0"

        },
        {
            profile:"https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
            name:"Pruthvi Jagushte",
            desc:" Friends Forever 💕",
            postimage:"https://th.bing.com/th/id/R.e3546f86cc4fb97af71392d9581d8c19?rik=6fjo8sCC116NcA&riu=http%3a%2f%2fallhdwallpapers.com%2fwp-content%2fuploads%2f2016%2f07%2fFriends-3.jpg&ehk=bhAWr3cZdWATNoZBclE%2bwm19ix3Uhhqhu3Jw3Upkzb8%3d&risl=&pid=ImgRaw&r=0"

        }


    ]
  return (
  <>
  <div className='post-container'>
  {type &&  <div className='addpost'>
        <div className='userdetail'>
            <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="" />
            <input type="text" placeholder='What is in your mind ?' />
        </div>
        <div className='postaddicon'>
          <InsertPhotoIcon/><span> Add photo</span>
          <PlaceIcon/> <span>Place</span>
          <Diversity3Icon/><span>Tag friends</span>
        </div>
    </div>}
    {postdata && postdata.map((m)=>{return(<>
        <div className='post' key={m._id}>
        <div className='userinfo'> 
            <img src={m.profile} alt="" />
            <div>
                <span>{m.name}</span>
                <small>1 minut ago</small>
            </div>
        </div>
        <p>{m.desc}</p>
        <img src={m.postimage} alt="" className='postimg'/>
        <div className='posticons'>
         <FavoriteIcon/><span>23 likes</span>
         <InsertCommentIcon/> <span style={{cursor:"pointer"}} onClick={()=>{setshowcomment(!showcomment)}}>comments</span>
         <ShareIcon/><span>Share</span>
        </div>
      {showcomment &&  <Comment/>}
    </div>
    
    
    </>)})}
  </div>
  
  </>
  )
}

export default Post
