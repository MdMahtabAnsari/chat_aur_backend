import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
});


connectDB();













/*
import express from "express";
import * as logger from 'morgan';

const app = express();

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('error', (error)=>{
            logger.error('Error al conectar a la base de datos');
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`Server running on port ${process.env.PORT}`);
        
        })
            
    }catch(error){
        console.log("Error al conectar a la base de datos");
    }

    

})()*/