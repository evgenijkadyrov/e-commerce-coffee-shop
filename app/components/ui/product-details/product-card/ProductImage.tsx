import { formatPrice } from "@/layout/header/cart/cartItem/format-price";
import { IProductDetails } from "@/app/types/product.interface";
import styles from "./styles.module.scss";
import React, { FC } from "react";
import Image from "next/image";

interface IProductImage extends IProductDetails {
  selectIconImage: number;
}

const ProductImage: FC<IProductImage> = ({ product, selectIconImage }) => {
  return (
    <div className={styles.image}>
      <div className={styles.main}>
        <Image
          src={product.images[selectIconImage]}
          alt={product.name}
          height={240}
          width={240}
        />
      </div>

      <div className={styles.price}>{formatPrice(product.price)}</div>
    </div>
  );
};

export default ProductImage;