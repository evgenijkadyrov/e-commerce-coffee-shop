"use client";
import ProductInformation from "@/ui/product-details/product-card/ProductInformation";
import ProductVariations from "@/ui/product-details/product-card/ProductVariations";
import ProductImage from "@/ui/product-details/product-card/ProductImage";
import { IProductDetails } from "@/app/types/product.interface";
import styles from "./styles.module.scss";
import React, { FC, useState } from "react";

const ProductCard: FC<IProductDetails> = ({ product }) => {
  const [selectIconImage, setSelectIconImage] = useState(0);

  return (
    <div className={styles.card}>
      <ProductInformation
        product={product}
        selectIconImage={selectIconImage}
        setSelectIconImage={setSelectIconImage}
      />
      <ProductImage product={product} selectIconImage={selectIconImage} />
      <ProductVariations product={product} />
    </div>
  );
};

export default ProductCard;