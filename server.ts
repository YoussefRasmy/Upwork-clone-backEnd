import { NextFunction, Request, Response } from "express";
import * as errorHandler from "./heplers/ErrorHanlder";
import express from "express";
const cors=require("cors");
const app=express();
const port=process.env.PORT || 3000;
import morgan from "morgan";
import 'dotenv/config'
//import './db';

app.use(cors());
app.get("/",(req:Request,res:Response)=>{
  res.json("Hello")
});


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("tiny"));

app.use(errorHandler.errorMiddleware);

process.on("uncaughtException",()=>{
  process.exit(1);
})
process.on("unhandledRejection",()=>{
  process.exit(1);
})
app.listen(port);