import express from "express";
import { createCompraController } from "../controllers/comprasController.js";

const router = express.Router()

//routes 
//create category
router.post('/create-compra',createCompraController)

export default router




