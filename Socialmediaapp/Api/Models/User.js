import mongoose from 'mongoose'

const userscema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
   
    password:{
        type:String,
        required:true
    },
    profile:{
        type:String,
       default:""

    },
    coverimg:{
        type:String,
        default:""
    },
    followers:{
        type:Number,
        default:0
    },
    Followedusers:{
        type:[String]
    }


},
{
    timestamps:true
        }
    
    );

    export default mongoose.model("users",userscema);