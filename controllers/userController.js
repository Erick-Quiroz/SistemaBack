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


export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    // Verify user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email is not registered",
      });
    }
    // Check password match
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }
    // Assign role value
    let role = 0; // By default, the role is 0 for normal users
    if (user.role === 1) {
      role = 1; // If the user has a role of 1, assign 1 for administrators
    }
    // Generate JWT token
    const token = await JWT.sign({ _id: user._id, role }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Return success response with token and user role
    res.status(200).json({
      success: true,
      token,
      role,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in login",
      error: error.message,
    });
  }
};



