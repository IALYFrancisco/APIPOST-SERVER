import express from 'express';
import { get_all_product } from '../controllers/ProductController/get_all_product.js';
import { get_one_product } from '../controllers/ProductController/get_one_product.js';
import { post_one_product } from '../controllers/ProductController/post_one_product.js';

const product_route = express.Router();

product_route.get('/all_products', get_all_product);

product_route.get('/product/:id', get_one_product);

product_route.post('/productOne', post_one_product);

export default product_route;