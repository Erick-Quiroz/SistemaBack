import mongoose from "mongoose";

const productLGSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    porcentage: {
      type: Number,
      
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    }, 
    expiration: {
      type: String,
      
    },
    existence: {
      type: Number,
      
    },
    cost: {
      type: Number,
      
    },
    utility: {
      type: Number,
      
    },
    received: {
      type: Number,
      
    },
    supplier: {
      type: String,
      
    }

    /*
    photo: {
      data: Buffer,
      contentType: String,
    },*/
  },
  { timestamps: true }
);

export default mongoose.model("products", productLGSchema);
