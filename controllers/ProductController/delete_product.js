import Product from "../../models/product_models.js";

export const delete_product = async (request, response) => {
    
    var DeleteStatus = await Product.findByIdAndDelete(request.params.id);
    
    if(DeleteStatus){
    
        response.status(200).json(`The product with id ${request.params.id} is deleted 👍✅`);
    
    }

}