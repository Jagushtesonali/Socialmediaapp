import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WindowIcon from '@mui/icons-material/Window';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.scss'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar() {

const {currentUser }= useSelector((state)=>state.user)
console.log(currentUser)




  return (

   <>
   <div className='navbar'>
     <div className='left'>
     <Link to="/" style={{textDecoration:"none",color:"black"}}>  <span>  SocialmediaApp</span></Link>
   <HomeIcon/>

   <DarkModeIcon/>
   <WindowIcon/>
   <SearchIcon className='SearchIcon'/>
   <input type="text" />
   

     </div>
     <div className='right'>
   <PersonIcon/>
   <EmailIcon/>
   <NotificationsIcon/>
  <img src={currentUser?.profile} alt="" style={{width:"25px",height:"25px",borderRadius:"50%",objectFit:"cover"}}/>
   <span>{currentUser.name}</span>
     </div>
   </div>
   
   
   
   </>
  )
}

export default Navbar
