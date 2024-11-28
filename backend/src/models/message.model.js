import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderID :{
        type : String,
        required : true
    }, // clerk user ID
    receiverID :{
        type : String,
        required : true
    }, // clerk user ID 
   content :{
       type : String,
       required : true
   }
}, {timestamps: true});

export const Message = mongoose.model("Message", messageSchema); 