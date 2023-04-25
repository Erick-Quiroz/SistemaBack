import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,

    },
    slug:{
        type:String,
        lowercase:true,
    },
    description:{
        type:String,
        required:true,
     },
    state:{
        type:String,
        required:true,
     }
})


export default mongoose.model("Category",categorySchema)



