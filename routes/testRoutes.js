import express from 'express'
import { createSupplierController1 } from '../controllers/testController.js'
//router object
const router = express.Router()

//routing
//REGISTE || METOD POST
router.post('/register-supplier',createSupplierController1)

export default router

