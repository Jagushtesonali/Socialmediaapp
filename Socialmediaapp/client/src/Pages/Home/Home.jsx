import React, { useEffect, useState } from 'react'
import './Home.scss'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stories from '../../Components/Stories/Stories';
import Post from '../../Components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchpost, postfetchfail, postfetchsuccess } from '../../Redux/Postslice';
function Home() {

  const dispatch = useDispatch()
const {currentUser}=useSelector((state)=>state.user)
const {userspost}=useSelector((state)=>state.post)

  useEffect(() => {
  dispatch(fetchpost())
const fetchdata = async ()=>{

  try {
    const res = await axios.get(`/api/post/timeline/${currentUser._id}`)
   
    
    dispatch(postfetchsuccess(res.data))
    console.log(res.data)
  } catch (error) {
    dispatch(postfetchfail(error))
  }

}
fetchdata()



  }, [])




  return (
   <>
   <div className='home-container'>

  <Stories/>
   
  {userspost&& userspost.map((post)=>{
    return(<>
    <Post  key={post._id}posts={post} type="home"/>
    </>)
   })}

   
   
   

   
   
   </div>
   </>
  )
}

export default Home
