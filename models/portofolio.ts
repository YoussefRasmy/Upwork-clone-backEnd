

import mongoose from "mongoose";
const {ObjectId}=mongoose.Schema.Types;

const portofolioSchema=new mongoose.Schema({
    title:{type:String},
    img:{type:String},
    skills:[{type:ObjectId,ref:"skill"}],
    createdAt:{type:Date,default:Date.now()},
    links:[String],
    });

module.exports=mongoose.model("portofolio",portofolioSchema);