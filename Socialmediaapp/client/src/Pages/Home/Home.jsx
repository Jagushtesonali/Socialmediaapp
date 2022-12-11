import React from 'react'
import './Home.scss'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stories from '../../Components/Stories/Stories';
import Post from '../../Components/Post/Post';
function Home() {
  return (
   <>
   <div className='home-container'>

  <Stories/>
   
<Post/>
   
   
   

   
   
   </div>
   </>
  )
}

export default Home
