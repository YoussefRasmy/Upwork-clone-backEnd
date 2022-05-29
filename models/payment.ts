import mongoose from "mongoose";
const {Subdocument,ObjectId}=mongoose.Schema.Types;

const paymentSchema=new mongoose.Schema({
    freelancerId:{type:ObjectId,ref:"user"},
    budget:{type:Number},
    commition:{type:Number},
    fullBalance:{type:Number},
    clientId:{type:ObjectId,ref:"user"},
});

module.exports=mongoose.model("payment",paymentSchema);