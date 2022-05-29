import mongoose from "mongoose";
const {Subdocument,ObjectId}=mongoose.Schema.Types;

const skillSchema=new mongoose.Schema({
    skillName:{type:String},
     category:{type:String,enum:["it","design","engineer"]}
});

module.exports=mongoose.model("skill",skillSchema);