import Product from '../../models/product_models.js'

export const get_all_product = async (request, response) => {
    response.status(200).send( await Product.find() );
}