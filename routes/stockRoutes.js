import express from "express";
import {
  createProductLGController,updatestockController, ProductLGControlller,singleProductLGController,deleteProductLGCOntroller
} from "../controllers/stockController.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-productLG",
  createProductLGController
);

//get products
router.get("/get-productLG", ProductLGControlller);

//single product
router.get("/get-productLG/:slug", singleProductLGController);


//delete rproduct
router.delete("/productLG/:pid", deleteProductLGCOntroller);

//update
router.put("/update-stock/:pid",updatestockController
  );
  

//routes







//get photo
//router.get("/product-photo/:pid", productPhotoController);



export default router;