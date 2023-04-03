import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:true,
        trim:true
    },
    email:{
        type : String,
        required:true,
        //unique:true
    },   
    address: {
        type: String,
        required: true,
    },
    phonenumber1: {
        type: Number,
        required: true,
    },
    phonenumber2: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    email2: {
        type: String,
        required: true,
    },

},{timestamps:true})

export default mongoose.model('supplier',supplierSchema)
