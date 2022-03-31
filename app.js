import express from "express";
import mongoose from "mongoose";
import event from "./controllers/eventListener.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const mongodbUri = process.env.MONGODB_URI;

event();

async function connect() {
    
    try{
 
        await mongoose.connect(mongodbUri);
        console.log("connected to the database");
        
        app.listen(3000);
        console.log("Server is running");
    }
    catch(error){
        console.log(error);
    }
}

connect();