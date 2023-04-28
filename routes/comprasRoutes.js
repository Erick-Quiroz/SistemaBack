import express from "express";

import { createCompraController,comprasGetControlller } from "../controllers/comprasController.js";


const router = express.Router()

//routes 
//create category
router.post('/create-compra',createCompraController)
//getAll compras
router.get("/get-compras", comprasGetControlller);


export default router




