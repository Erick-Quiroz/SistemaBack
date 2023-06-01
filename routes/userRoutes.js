import express from "express";

import { registerUserController,singleUserLGController,updateUserLGController,getuseridLGController } from "../controllers/userController.js";
import { loginController } from "../controllers/userController.js";

const router = express.Router()

//routes 
//register user
router.post('/register-user',registerUserController)

//login user
router.post('/login-user', loginController)
router.get('/get-user/:email' ,singleUserLGController)
router.get('/get-user-id/:slug' ,getuseridLGController)
router.put('/update-user/:pid', updateUserLGController)
export default router
