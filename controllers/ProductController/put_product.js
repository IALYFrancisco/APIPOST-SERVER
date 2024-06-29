import Product from "../../models/product_models.js";

export const put_product = async ( request, response ) => {

    let product = await Product.findByIdAndUpdate( request.params.id, request.body );

    await product.save();

    response.send("Product updated with PUT ✅✨");

}