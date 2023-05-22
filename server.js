import express from "express"
import colors from "colors"
import dotenv from 'dotenv'
import morgan from 'morgan'
//conexion BD
import connectDB from "./config/db.js"
//Rutas
import categoryRoutes from './routes/categoryRoutes.js'
import productLGRoutes from "./routes/productLGRoutes.js";
import supplierLGRoutes from "./routes/supplierLGRoutes.js";
import cors from "cors";
import stockRoutes from "./routes/stockRoutes.js"
import userRoutes from "./routes/userRoutes.js"

// express = require('express')
//const colors = require('colors')
//configure env
dotenv.config()

//database config
connectDB();

//rest object
const app = express()

//middelware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))



//routes

app.use('/api/category',categoryRoutes)
app.use("/api/productLG", productLGRoutes);
app.use("/api/supplierLG", supplierLGRoutes);
app.use("/api/stock",stockRoutes )
app.use("/api/user",userRoutes)



//rest api
app.get("/",(req,res) => {
    res.send("<h1>welcome to ecommerce app</h1>")
})

//PORT
const PORT = process.env.PORT || 8080

//run listen
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})


