import productLGModel from "../models/productLGModel.js";
import fs from "fs";
import slugify from "slugify";

//createProductLGController,updateProductLGController, ProductLGControlller,singleProductLGController,deleteProductLGCOntroller

export const createProductLGController = async (req, res) => {
    try{
        const{name, description, state, category} = req.body
        //validations
        if(!name){
            return res.send({error:'name is required'})
        }if(!description){
            return res.send({message:'description is required'})
        }if(!state){
            return res.send({message:'state error is required'})
        }if(!category){
            return res.send({error:'category is required'})
        }
        
        
        //check user

        const existingUser = await productLGModel.findOne({name})
        console.log(existingUser)
           
        //existing user
        
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'already register'
            })
        }
        //save
        const product = await new productLGModel({
            name, slug:slugify(name), description, state, category
        }).save()

        res.status(201).send({
            success:true,
            message:'user register successfully',
            product,
        }).save

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in registration',
            error,
        })
    }
}

//update product
export const updateProductLGController = async (req, res) => {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const product = await productLGModel.findByIdAndUpdate(
        id,
        { name, slug: slugify(name) },
        { new: true }
      );
      res.status(200).send({
        success: true,
        messsage: "Product Updated Successfully",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while updating product",
      });
    }
  };


   // get all cat
   export const ProductLGControlller = async (req, res) => {
    try {
      const product = await productLGModel.find({}).select("name");
      res.status(200).send({
        success: true,
        message: "Lista de Productos",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all categories",
      });
    }
  };
  
  // single product
  export const singleProductLGController = async (req, res) => {
    try {
      const product = await productLGModel.findOne({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Get SIngle product SUccessfully",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single product",
      });
    }
  };
  
  //delete product
  export const deleteProductLGCOntroller = async (req, res) => {
    try {
      const { id } = req.params;
      await productLGModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Categry Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting product",
        error,
      });
    }
  };



