import ProductDetails from "@/ui/product-details/ProductDetails";
import { IProduct } from "@/app/types/product.interface";
import React, { FC } from "react";

const ProductDetailsPage: FC<{ product: IProduct }> = ({ product }) => {
  if(product)
  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;