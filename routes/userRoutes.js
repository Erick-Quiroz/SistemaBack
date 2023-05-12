import express from "express";
import { registerUserController } from "../controllers/userController.js";

const router = express.Router()

//routes 
//register user
router.post('/register-user',registerUserController)

//login user
  
export default router
