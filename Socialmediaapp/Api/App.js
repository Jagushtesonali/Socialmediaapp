import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authroute from './Routers/Auth.js'
import userroute from './Routers/User.js'
import postroute from './Routers/Post.js'
import cookieParser from 'cookie-parser'
const app = express()
dotenv.config()
const connect = ()=>{
    mongoose.connect(process.env.MONGODB,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>
    {console.log("connected to mongodb")}).catch((err)=>
    {console.log(err)})
    
    }
    
    app.use(express.json())
    app.use(cookieParser())
   app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "something went wrong";
    return res.status(status).json({
        success:false,
        status:status,
        message:message
    })
})
    app.use("/api/auth",authroute)
    app.use("/api/user",userroute)
    app.use("/api/post",postroute)

app.listen(8080,(req,res)=>{
    connect()
    console.log("connected to port ")
})
