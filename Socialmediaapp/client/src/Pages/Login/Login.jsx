import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

function Login() {
  return (
    <div className='login-container'>
    <div className='login-main'>
        <div className='left'>
        <img src="https://media.istockphoto.com/id/1439824996/photo/young-multiracial-people-taking-a-selfie-with-smartphone-and-having-fun-in-the-city-outdoors.jpg?s=612x612&w=0&k=20&c=JcoL1TRKLSwrJvGQ1bE9ugF4kYJLK3GE71hPmX0ubIw=" alt="" className='image'/>
            <div className='content'>
            <p className='heading'>Register to Social media app to chat with friends</p>
           <Link to="/register">     <button>Register</button></Link>
            </div>
        </div>
        <div className='right'>
        <p style={{fontSize:"20px",fontWeight:"bold"}}>Login</p>
         <input type="email" placeholder='Email' />
        
         <input type="password" placeholder='Password' />
         <button className='register'>Login</button>

        </div>
    </div>
   </div>
   
   
  )
}

export default Login
