

import mongoose from "mongoose";
const {ObjectId}=mongoose.Schema.Types;

const postSchema=new mongoose.Schema({
    desc:{type:String},
    Status:{type:String,enum:["completed","pending","canceled"]},
    duration:{type:String},
    budget:{type:Number},
    no_proposels:{type:Number},
    expirestion_time:{type:Date},
    createdAt:{type:Date,default:Date.now()},
    skills:[{type:ObjectId,ref:"skill"}],
});

module.exports=mongoose.model("post",postSchema);