import userModel from "../models/userModel.js";
import { comparePassword, hashPassword} from "../helpers/authHelpers.js";
import JWT from "jsonwebtoken";

export const registerUserController = async (req, res) => {
  try {
    const { email, name, lastname, phone, password,} = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      email,
      name,
      lastname,
      phone,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};
export const singleUserLGController = async (req, res) => {
  try {
    const { email } = req.params;
    const product = await productLGModel.findById(email);
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
      message: "Error While getting Single product error",
    });
  }
};

//update product
export const updateUserLGController = async (req, res) => {
  try {
    const { name } = req.body;
    const { email } = req.body;
    const { lastname } = req.body;
    const { phone } = req.body;
    const { password } = req.body;
    
    const product = await productLGModel.findByIdAndUpdate(
      pid,
      {
        name,
        email,
        lastname,
        phone,
        password
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
export const updateUserController = async (req, res) => {
  try {
    const { email, name, lastname, phone, password } = req.body;
    
    // validations
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    if (!phone) {
      return res.send({ message: "Phone number is required" });
    }
    
    // find user by email
    const existingUser = await userModel.findOne({ email });

    // user not found
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // update user data
    existingUser.name = name;
    existingUser.lastname = lastname;
    existingUser.phone = phone;
    existingUser.password = await hashPassword(password);

    // save the updated user data
    const updatedUser = await existingUser.save();

    res.status(200).send({
      success: true,
      message: "User data updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in updating user data",
      error,
    });
  }
};