import express from "express";
import {
  createProductLGController,updateProductLGController,updateOfferLGController,deleteOfferLGCOntroller ,ProductLGControlller,singleProductLGController,deleteProductLGCOntroller, filterCategoryProductLGController
} from "../controllers/productLGController.js";
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
router.put(
    "/update-productLG/:pid",updateProductLGController
  );
  

//routes
//offer
router.put(
  "/update-offerLG/:pid",updateOfferLGController
);
//delete rproduct
router.delete("/offerDproductLG/:pid", deleteOfferLGCOntroller);

//filter product category 
router.get("/filter-Category-productLG/:cate", filterCategoryProductLGController);




//get photo
//router.get("/product-photo/:pid", productPhotoController);



export default router;
