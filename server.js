import express from "express"
import colors from "colors"
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from "./routes/productRoutes.js";
import productLGRoutes from "./routes/productLGRoutes.js";
import supplierLGRoutes from "./routes/supplierLGRoutes.js";
import testRoutes from "./routes/testRoutes.js"
import cors from "cors";


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
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/productLG", productLGRoutes);
app.use("/api/v1/supplierLG", supplierLGRoutes);
app.use("/api/v1/supplier",testRoutes)


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


