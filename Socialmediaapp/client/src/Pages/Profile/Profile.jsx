import React, { useState } from 'react'
import './Profile.scss'
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import Post from '../../Components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { fetchpost, postfetchfail, postfetchsuccess } from '../../Redux/Postslice';
function Profile() {
  const[userdata,setuserdata]=useState(null)
  const[postdata,setpostdata]=useState(null)
  const {currentUser}= useSelector((state)=>state.user)
  const {userspost}=useSelector((state)=>state.post)
  const location = useLocation()
  const userid = location.pathname.split("/")[2]
const dispatch = useDispatch()

useEffect(() => {

  const fetchuser = async ()=>{
 
    const res = await axios.get(`/api/user/${userid}`)
    setuserdata(res.data)

  }
  fetchuser()

}, [userid])


useEffect(() => {

  const posts = async ()=>{
 
  try {
    dispatch(fetchpost())
    const res = await axios.get(`/api/post/${userid}`)
    dispatch(postfetchsuccess(res.data))
  
    console.log(res.data)
    setpostdata(res.data)
   
    
  } catch (error) {
    postfetchfail(error)
  }

  }
  posts()

}, [userid])

const handlefollow= async()=>{

const res = await axios.put(`/api/user/follow/${userid}`)
console.log(res.data)

}


  return (
   <>
   <div className='profilecontainer'>
   <div> <div className='coverimg'>
      <img src={userdata?.coverimg} alt="" />
    </div>
    <div className='userdetails'>
      <img src={userdata?.profile} alt="" />
      <span style={{marginTop:"50px"}}>{userdata?.name}</span>
      <div className='socialicon'>
    
       <span> <FacebookIcon/><InstagramIcon/><TwitterIcon/><LinkedInIcon/><PinterestIcon/></span>
       <span> <FormatPaintIcon/>Insta div<LocationOnIcon/>India</span>
       <span>
        <EmailIcon/><MoreVertIcon/>
       </span>
      
      </div>
      <button onClick={handlefollow}>{!currentUser.Followedusers.includes(userid) ? "Follow":"Following"}</button>
    </div></div>

    {userspost && userspost.map((m)=>{
      return(
        <Post post={m}/>
      )
    }
    )}
   
   </div>
   
   
   </>
  )
}

export default Profile
