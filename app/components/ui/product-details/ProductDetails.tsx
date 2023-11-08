import {IProduct, IProductDetails} from "@/app/types/product.interface";

import BreadcrumbProduct from "@/ui/product-details/breadcrumb/Breadcrumb";
import { Layout } from "@/layout/Layout";
import React, { FC } from "react";
import ProductsNavigation
    from "@/ui/product-details/products-navigation/productsNavigation";
import ProductCard from "@/ui/product-details/product-card/ProductCard";

const ProductDetails: FC<IProductDetails> = ({ product }) => {
  return (
    <Layout title={product.name}>

      <div className="font-black text-green text-6xl  ml-auto m-8 text-center leading-tight">
        {product.name}
      </div>
        <BreadcrumbProduct />
        <div className={'text-right'}>
        <ProductsNavigation productId={product.id}/>
        </div>
        <ProductCard product={product}/>
    </Layout>
  );
};

export default ProductDetails;