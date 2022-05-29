import mongoose from "mongoose";
const {Subdocument,ObjectId}=mongoose.Schema.Types;
const userSchema=new mongoose.Schema({
    email:{
        type:String,
    },
    password:{type:String},
    name:{type:String},
    age:{type:Number},
    address:{type:String},
    gender:{type:String,enum:["male","female"]},
    phone:{type:String},
    isAdmin:{type:Boolean},
    providerID:{type:Number},
    providerName:{type:String},
    client:{
        company_name:{type:String},
        company_industy:{
            type:Subdocument
        },
        no_Hires:{type:Number},
        payment_method:{type:String,enum:["paypal","visa","masterCard"]},
        posts:[{type:ObjectId,ref:"Posts"}]
      
    },
    freelancer:{
        rating:{type:Number},
        level:{type:String},
        image:{type:String},
        skills:[{type:ObjectId,ref:"Skills"}],
        proposel:{
            id:{type:ObjectId},
            Status:{type:String,enum:["completed","pending","canceled"]},
            desc:{type:String},
            post_id:{type:ObjectId,ref:"Posts"},
        },
        portoflio:[{type:ObjectId,ref:"Portoflios"}]
    }
})

module.exports=mongoose.model("user",userSchema);