import express from 'express';
import { get_all_product } from '../controllers/ProductController/get_all_product.js';
import { get_one_product } from '../controllers/ProductController/get_one_product.js';
import { post_one_product } from '../controllers/ProductController/post_one_product.js';
import { delete_product } from '../controllers/ProductController/delete_product.js';
import { put_product } from '../controllers/ProductController/put_product.js';
import { patch_product } from '../controllers/ProductController/patch_product.js';

const product_route = express.Router();

product_route.get('/all_products', get_all_product);

product_route.get('/product/:id', get_one_product);

product_route.post('/product', post_one_product);

product_route.delete('/product/:id', delete_product);

product_route.put('/product/:id', put_product);

product_route.patch('/product/:id', patch_product);

export default product_route;