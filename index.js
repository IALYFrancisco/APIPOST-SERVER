import express from 'express';
import dotenv from 'dotenv';
import product_router from './routes/product_route.js';

dotenv.config();

const app = express();

app.use(express.json())

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Methods', '*')
    next();
})

app.get('/', (request, response) => {
    response.status(200).json("Welcome to APIPOST server 😀");
});

app.use('/', product_router);

app.listen(process.env.APP_PORT, ()=>{ console.log(`http://127.0.0.1:${process.env.APP_PORT}`) });