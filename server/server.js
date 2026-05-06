import express from 'express';
import cors from 'cors';
import db_conn from './config/db.js';
import 'dotenv/config'
import { userRoute } from './Route/UserRoute.js';
import { carRoute } from './Route/CarRoute.js';

// Database Connection Function
db_conn();

// Express Enviroment Connection
const app = express();
app.use(express.json())

// Cors Enviroment Connection
const orgins= [process.env.URL]
app.use(cors({
    origin:orgins,
    credentials:true
}))

// Listenning Running Port or Url
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server connected running on http://localhost:${port}`)
})

// Creating Routes API
app.get('/',(req,res)=>{
    res.send("Api Running Well")
})

// User Routes API 
app.use("/api",userRoute)

// Car Route API
app.use("/api/car",carRoute)