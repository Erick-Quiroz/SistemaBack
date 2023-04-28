import mongoose from "mongoose";


const comprasSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    slug:{
        type:String,
        lowercase:true,
    },
    supplier:{
        type:String,
        required:true,
    },
    //date:{
    //    type:String,
    //    required:true,
    //},
    quantity:{
        type: Number,
        required: true,
    },
    total:{
        type: Number,
        required:true,
    },
    state:{
        type:String,
        required:true,
    }

})


export default mongoose.model("compras",comprasSchema)

