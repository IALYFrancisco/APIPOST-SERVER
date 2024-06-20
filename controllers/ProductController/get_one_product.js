import Product from '../../models/product_models.js'

export const get_one_product = async (request, response) => {
    var product = await Product.find({_id : request.params.id})
    if(product==""){
        console.log('element doesn\'t exist');
        response.status(200).json('element doesn\'t exist');
    }else{
        response.status(200).send( product );
    }
}