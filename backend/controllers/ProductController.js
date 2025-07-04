import { Product } from "../models/Product.js";
export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const createProduct = async (req, res) => {
   try {
     console.log("req",req)
  const product = await Product.create(req.body);
  console.log("project", product)
  res.status(201).json(product);
   } catch (error) {
    console.log("error",error)
    return res.status(500).json({error: error})
   }
};

export const updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
};
