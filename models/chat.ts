import mongoose from "mongoose";
const {Subdocument,ObjectId}=mongoose.Schema.Types;

const chatSchema=new mongoose.Schema({
    createdAt:{type:Date,default:Date.now()},
    msgContent:{type:String},
    senderId:{type:ObjectId,ref:"user"},
    recieverId:{type:ObjectId,ref:"user"},
});

module.exports=mongoose.model("chat",chatSchema);