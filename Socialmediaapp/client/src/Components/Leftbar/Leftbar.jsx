import React from 'react'
import './Leftbar.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import Groups2Icon from '@mui/icons-material/Groups2';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MovieIcon from '@mui/icons-material/Movie';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import EventIcon from '@mui/icons-material/Event';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CollectionsIcon from '@mui/icons-material/Collections';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import SettingsIcon from '@mui/icons-material/Settings';
function Leftbar() {
  return (
   <>
   <div className='left-container'>
     <div className='item'>
      <AccountCircleIcon style={{color:"blue"}}/><span>Sonali Jagushte</span>
     </div>
     <div className='item'>
      <GroupIcon style={{background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(127,93,163,0.3253676470588235) 97%)"}}/><span>Friends</span>
     </div>
     <div className='item'>
      <Groups2Icon style={{color:"eda1d2"}}/><span>Groups</span>
     </div>
     <div className='item'>
      <BusinessCenterIcon style={{color:"a88e9f"}}/><span>Marketplace</span>
     </div>
     <div className='item'>
      <MovieIcon /><span>Watch</span>
     </div>
     <div className='item'>
      <AutoAwesomeMotionIcon style={{color:"dc9e66"}}/><span>Memories</span>
     </div>
     <hr />
     <div className='item'>
      <EventIcon/><span>Events</span>
     </div>
     <div className='item'>
      <SportsEsportsIcon/><span>Gaming</span>
     </div>
     <div className='item'>
      <CollectionsIcon/><span>Movies</span>
     </div>
     <div className='item'>
      <OndemandVideoIcon/><span>Videos</span>
     </div>
     <div className='item'>
      <MarkunreadIcon/><span>Messages</span>
     </div>
     <hr />
     <div className='item'>
      <MenuBookIcon/><span>Tutorials</span>
     </div>
     <div className='item'>
      <GolfCourseIcon/><span>Courses</span>
     </div>
     <div className='item'>
      <SettingsIcon/><span>Setting</span>
     </div>
   </div>
   
   
   </>
  )
}

export default Leftbar
