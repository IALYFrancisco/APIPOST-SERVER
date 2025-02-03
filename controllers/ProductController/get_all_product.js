import Product from '../../models/product_models.js'
import { dbConnexion, dbDisconnexion } from '../../services/dbServices.js';

export const get_all_product = async (request, response) => {
    await dbConnexion()
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.status(200).send( await Product.find() );
    await dbDisconnexion()
}