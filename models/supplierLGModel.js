import mongoose from "mongoose";

const supplierLGSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: false,
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
    email1: {
      type: String,
      required: true,
    },
    email2: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Suppliers", supplierLGSchema);

