import express from "express";

import { registerUserController,singleUserLGController,updateUserLGController,verifyToken } from "../controllers/userController.js";
import { loginController ,getUserById} from "../controllers/userController.js";

const router = express.Router()

//routes 
//register user
router.post('/register-user',registerUserController)

//login user
router.post('/login-user', loginController)
router.get('/get-user', verifyToken,getUserById)
//router.put('/update-user', updateUserLGController)
export default router
