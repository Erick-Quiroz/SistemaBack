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
