import productLGModel from "../models/productLGModel.js";

import slugify from "slugify";

//createProductLGController,updateProductLGController, ProductLGControlller,singleProductLGController,deleteProductLGCOntroller

export const createProductLGController = async (req, res) => {
  try {
    const { name,category, cost , expiration, existence } = req.body
    //validations
    if (!name) {
      return res.send({ error: 'name is required' })
    } if (!category) {
      return res.send({ message: 'category is required' })
    } if (!cost) {
      return res.send({ message: 'cost error is required' })
    } if (!expiration) {
      return res.send({ error: 'category is required' })
    } if (!existence) {
      return res.send({ error: 'price is required' })
    } 
    

    //check user

    const existingUser = await productLGModel.findOne({ name })
    console.log(existingUser)

    //existing user

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: 'already register'
      })
    }
    //save
    const product = await new productLGModel({
      name, slug: slugify(name), category, cost, expiration, existence
    }).save()

    res.status(201).send({
      success: true,
      message: 'user register successfully',
      product,
    }).save

  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'error in registration',
      error,
    })
  }
}

//update product
export const updatestockController = async (req, res) => {
  try {
    const { name } = req.body;
    const { category } = req.body;
    const { pid } = req.params;
    const { expiration } = req.body;
    const { existence} = req.body;
   
    const product = await productLGModel.findByIdAndUpdate(
      pid,
      {
        name, slug: slugify(name),
        category,
        expiration,
        existence
        
      },
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

// single product editar
export const singleProductLGController = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await productLGModel.findById(slug);
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
