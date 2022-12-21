import mongoose from "mongoose";

const commentscema = new mongoose.Schema({

    userid:{
        type:String,
        required:true
    },
    postid:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
       
    }
},
{
    timestamps:true
        }
    
    );

    export default mongoose.model("Comments",commentscema);