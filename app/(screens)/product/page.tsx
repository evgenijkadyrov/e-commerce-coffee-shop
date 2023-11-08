import { IProduct } from "@/app/types/product.interface";

import BreadcrumbProduct from "@/ui/catalog/breadcrumb/Breadcrumb";
import { Layout } from "@/layout/Layout";
import React, { FC } from "react";

const ProductDetails: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <Layout title={product.name}>

      <div className="font-black text-green text-6xl  ml-auto m-8 text-center leading-tight">
        {product.name}
      </div>
        <BreadcrumbProduct />
    </Layout>
  );
};

export default ProductDetails;