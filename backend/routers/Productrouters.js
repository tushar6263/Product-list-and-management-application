import express from 'express';
import  { createProduct, deleteProduct, getAllProducts, updateProduct } from '../controllers/ProductController.js'

const router = express.Router(); // ✅ Define the router
console.log("router")
// Routes
router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router; // ✅ Use ES module export
