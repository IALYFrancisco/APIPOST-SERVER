import Product from "../../models/product_models.js";

export const patch_product = async ( request, response ) => {

    const product = await Product.findByIdAndUpdate(request.params.id, request.body);

    await product.save();

    response.send("Product updated with PATCH ✅✨");

}