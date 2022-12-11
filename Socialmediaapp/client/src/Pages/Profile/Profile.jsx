import React from 'react'
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
function Profile() {
  return (
   <>
   <div className='profilecontainer'>
   <div> <div className='coverimg'>
      <img src="https://th.bing.com/th/id/OIP.XprF7kKAac989M24xSlBVgHaE8?pid=ImgDet&w=1920&h=1280&rs=1" alt="" />
    </div>
    <div className='userdetails'>
      <img src="https://www.free-photos.biz/images/people/girls/an_11-year-old_girl_photographed_in_june_2015_07.jpg" alt="" />
      <span style={{marginTop:"50px"}}>Sonali Jagushte</span>
      <div className='socialicon'>
    
       <span> <FacebookIcon/><InstagramIcon/><TwitterIcon/><LinkedInIcon/><PinterestIcon/></span>
       <span> <FormatPaintIcon/>Insta div<LocationOnIcon/>India</span>
       <span>
        <EmailIcon/><MoreVertIcon/>
       </span>
      
      </div>
      <button>Follow</button>
    </div></div>
    <Post/>
   </div>
   
   
   </>
  )
}

export default Profile
