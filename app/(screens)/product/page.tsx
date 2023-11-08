import {IProduct} from "@/app/types/product.interface";
import React, {FC} from "react";
import ProductDetails from "@/ui/product-details/ProductDetails";

const ProductDetailsPage: FC<{ product: IProduct }> = ({product}) => {
    return (
        <ProductDetails product={product}/>)
};

export default ProductDetailsPage;