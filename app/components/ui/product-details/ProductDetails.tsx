import { IProductDetails } from "@/app/types/product.interface";

import ProductsNavigation from "@/ui/product-details/products-navigation/productsNavigation";
import BreadcrumbProduct from "@/ui/product-details/breadcrumb/Breadcrumb";
import ProductCard from "@/ui/product-details/product-card/ProductCard";
import { Layout } from "@/layout/Layout";
import React, { FC } from "react";

const ProductDetails: FC<IProductDetails> = ({ product }) => {
  return (
    <Layout title={product.name}>
      <div className="font-black text-green text-6xl  ml-auto m-8 text-center leading-tight">
        Product details
      </div>
      <div className={"flex justify-between items-center"}>
        <BreadcrumbProduct productName={product.name} />
        <div className={"text-right"}>
          <ProductsNavigation productId={product.id} />
        </div>
      </div>
      <ProductCard product={product} />
    </Layout>
  );
};

export default ProductDetails;