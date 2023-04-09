import productLGModel from "../models/productLGModel.js";

import slugify from "slugify";

//createProductLGController,updateProductLGController, ProductLGControlller,singleProductLGController,deleteProductLGCOntroller

export const createProductLGController = async (req, res) => {
    try{
        const{name, description, state, category, imageUrl} = req.body
        //validations
        if(!name){
            return res.send({error:'name is required'})
        }if(!description){
            return res.send({message:'description is required'})
        }if(!state){
            return res.send({message:'state error is required'})
        }if(!category){
            return res.send({error:'category is required'})
        }if(!imageUrl){
          return res.send({error:'name is required'})
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
            name, slug:slugify(name), description, state, category, imageUrl
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
    const { description } = req.body;
    const { state } = req.body;
    const { category } = req.body;
    const { pid } = req.params;
    const product = await productLGModel.findByIdAndUpdate(
      pid,
      { name, slug: slugify(name),
        description,
        state,
        category },
      { new: true }
    );
    res.status(200).send({
      success: true,
      messsage: "Product Updated Successfully",
      product,
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating product",
    });
  }
};


   // get all products
   export const ProductLGControlller = async (req, res) => {
    try {
      const product = await productLGModel.find({});
      res.status(200).send({
        success: true,
        message: "All products List",
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
      const { slug } = req.params;
      const product = await productLGModel.findById( slug );
      res.status(200).send({
        success: true,
        message: "Get SIngle product SUccessfully C:",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single product error",
      });
    }
  };
  
  //delete product
  export const deleteProductLGCOntroller = async (req, res) => {
    try {
      const { id } = req.params;
      await productLGModel.findByIdAndDelete(req.params.pid);
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



