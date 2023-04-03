import express from "express";
import {
  createSupplierLGController,
  deleteSupplierLGController,
  getSupplierLGController,
  getSingleSupplierLGController,
  //productPhotoController,
  updateSupplierLGController,
} from "../controllers/supplierLGController.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-supplierLG",
  formidable(),
  createSupplierLGController
);

//get products
router.get("/get-supplierLG", getSupplierLGController);

//single product
router.get("/get-supplierLG/:slug", getSingleSupplierLGController);


//delete rproduct
router.delete("/supplierLG/:pid", deleteSupplierLGController);

//update
router.put(
    "/update-supplierLG/:pid",
    formidable(),
    updateSupplierLGController
  );
  

//routes
/*






//get photo
//router.get("/product-photo/:pid", productPhotoController);


*/
export default router;