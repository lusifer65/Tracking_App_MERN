import cors from 'cors';
import express from "express";
import ConnectToMongo from './config/db.js';
import OrderRouter from './routes/order.js'
import ProductRouter from './routes/productRoute.js';
const app=express()
app.use(cors())
ConnectToMongo()

//use midleware
app.use(express.json())
app.get("/",(req,res) =>{
res.send("index.js")
})

//routes

app.use('/api/v1',OrderRouter)
app.use('/api/v1',ProductRouter)
app.listen(5500,()=>{
    console.log(`http://localhost:${5500}`);
})