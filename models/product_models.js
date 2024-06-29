import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id : { type : Number, required : true },
    name : { type: String, required : true },
    price : { type : String, required: true },
    description : { type : String, required : true }
});

const Product = new mongoose.model('Product', productSchema);

export default Product;