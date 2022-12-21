import mongoose from "mongoose";

const postscema = new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    
   
    desc:{
        type:String,
        required:true
       
    },
    imgurl:{
        type:String
       
    },
    likes:{
        type:[String],
        default:[]
    },
    place:{
        type:String
    }
   
},
{
    timestamps:true
        }
    
    );

    export default mongoose.model("Posts",postscema);