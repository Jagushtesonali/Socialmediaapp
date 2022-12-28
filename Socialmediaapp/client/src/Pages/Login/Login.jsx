import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.scss'
import { useDispatch } from 'react-redux'
import { loginfail, loginstart, loginsuccess } from '../../Redux/userslice'
import axios from 'axios'

function Login() {
  const initialvalues = {email:"",password:""}
  const [formvalues,setformvalues]=useState(initialvalues) 
  const[submit,setsubmit]=useState(false)
  const[error,seterror]= useState({})
  const dispatch = useDispatch()
const navigate = useNavigate()

  const handlechange =(e)=>{
      e.preventDefault()
      const {name,value}= e.target
      setformvalues({...formvalues,[name]:value})
      console.log(formvalues)
  }
  const handlesubmit = async(e)=>{
      e.preventDefault()
      seterror(validate(formvalues))
      setsubmit(true)
      try {
        dispatch(loginstart())
        const res =await axios.post("/api/auth/login",formvalues)
   
        dispatch(loginsuccess(res.data))
        navigate("/")
      } catch (error) {
        dispatch(loginfail(error))
      }
  }
  const validate = (values)=>{
      const errors = {}
 
      
      if (!values.email) {
          errors.email ="email is required"
      }
      if (!values.password) {
          errors.password ="password is required"
      }else if (values.password < 4) {
          errors.password ="password is not less than 4 words"
      }else if (values.password > 10) {
          errors.password ="password is not excedded 10"
      }
 return errors



  }











  return (
    <div className='login-container'>
    <form className='login-main' onSubmit={handlesubmit}>
        <div className='left'>
        <img style={{borderRadius: "10px 0 0 10px"}} src="https://media.istockphoto.com/id/1439824996/photo/young-multiracial-people-taking-a-selfie-with-smartphone-and-having-fun-in-the-city-outdoors.jpg?s=612x612&w=0&k=20&c=JcoL1TRKLSwrJvGQ1bE9ugF4kYJLK3GE71hPmX0ubIw=" alt="" className='image'/>
            <div className='content'>
            <p className='heading'>Register to Social media app to chat with friends</p>
           <Link to="/register">     <button>Register</button></Link>
            </div>
        </div>
        <div className='right'>
        <p style={{fontSize:"20px",fontWeight:"bold"}}>Login</p>
         <input type="email" placeholder='Email' name='email'onChange={handlechange} />
        <p style={{color:"red"}}>{error.email}</p>
         <input type="password" placeholder='Password' onChange={handlechange} name='password'/>
         <p style={{color:"red"}}>{error.password}</p>
         <button className='register' name='password'type='submit' >Login</button>

        </div>
    </form>
   </div>
   
   
  )
}

export default Login
