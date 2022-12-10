import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WindowIcon from '@mui/icons-material/Window';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.scss'
function Navbar() {
  return (
   <>
   <div className='navbar'>
     <div className='left'>
    <span>  SocialmediaApp</span>
   <HomeIcon/>

   <DarkModeIcon/>
   <WindowIcon/>
   <input type="text" />
   

     </div>
     <div className='right'>
   <PersonIcon/>
   <EmailIcon/>
   <NotificationsIcon/>
   <AccountCircleIcon style={{color:"rgb(4, 69, 107)"}}/>
   <span>Sonali Jagushte</span>
     </div>
   </div>
   
   
   
   </>
  )
}

export default Navbar
