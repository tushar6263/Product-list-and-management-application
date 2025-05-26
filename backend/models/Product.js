import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   productname : {type:String , require:true},
   productdetail : {type:String , require:true},
});

// module.exports = mongoose.model('Product', productSchema);
export const Product = mongoose.model('Product', productSchema)