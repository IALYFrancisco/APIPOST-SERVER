import Product from '../../models/product_models.js';

export const post_one_product = async (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');

    try {
        
        let product = Product(request.body);
    
        await product.save();

        const responseToSend = new Array({
            message: "The below product is created 📋✅😎",
            product: product
        })
    
        response.status(200).send(responseToSend);

    }catch(error){

        response.json( "🔥⛔ " + error.message + " ⛔🔥");

    }

}