import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Register.scss'
function Register() {
    const initialvalues = {name:"",email:"",password:""}
    const [formvalues,setformvalues]=useState(initialvalues) 
    const[submit,setsubmit]=useState(false)
    const[error,seterror]= useState({})



    const handlechange =(e)=>{
        e.preventDefault()
        const {name,value}= e.target
        setformvalues({...formvalues,[name]:value})
        console.log(formvalues)
    }
    const handlesubmit =(e)=>{
        e.preventDefault()
        seterror(validate(formvalues))
        setsubmit(true)
    }
    const validate = (values)=>{
        const errors = {}
   
        if (!values.name) {
            errors.name ="name is required"
        }
        if (!values.email) {
            errors.email ="email is required"
        }
        if (!values.password) {
            errors.password ="password is required"
        }else if (values.password < 4) {
            errors.password ="password is not less than 4 words"
        }else if (values.password > 10) {
            errors.password ="password is not excedded 10"
        }else{
            errors.password=""
        }
   return errors



    }
  return (
   <>
   <div className='register-container'>
  
    <form className='register-main' method='Post' onSubmit={handlesubmit}>
        <div className='left'>
        <p style={{fontSize:"20px",fontWeight:"bold"}}>Register</p>
         <input type="text" placeholder='Name' value={formvalues.name} onChange={handlechange} name="name" />
         <p style={{color:"red"}}>{error.name}</p>
         <input type="email" placeholder='Email' value={formvalues.email} onChange={handlechange} name="email"/>
         <p style={{color:"red"}}>{error.email}</p>
         <input type="password" placeholder='Password' value={formvalues.password} onChange={handlechange} name="password"/>
         <p style={{color:"red"}}>{error.password}</p>
         <button className='register'>Register</button>
        </div>
        <div className='right'>
       <img src="https://media.istockphoto.com/id/1439824996/photo/young-multiracial-people-taking-a-selfie-with-smartphone-and-having-fun-in-the-city-outdoors.jpg?s=612x612&w=0&k=20&c=JcoL1TRKLSwrJvGQ1bE9ugF4kYJLK3GE71hPmX0ubIw=" alt="" className='image'/>
            <div className='content'>
            <p className='heading'>Register to Social media app to chat with friends</p>
          <Link to='/login'>      <button type='submit'>Login</button></Link>
            </div>

        </div>
    </form>
   </div>
   
   
   
   </>
  )
}

export default Register

