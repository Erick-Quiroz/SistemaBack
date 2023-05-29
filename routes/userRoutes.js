import express from "express";
import { registerUserController,singleUserLGController,updateUserController } from "../controllers/userController.js";

const router = express.Router()

//routes 
//register user
router.post('/register-user',registerUserController)
router.get("/get-User/:email", singleUserLGController);
//update
router.put(
    "/update-User",updateUserController
  );
//login user
  
export default router
