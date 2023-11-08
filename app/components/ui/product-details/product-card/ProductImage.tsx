import React, {FC} from 'react';
import {IProductDetails} from "@/app/types/product.interface";
import Image from 'next/image'
import {formatPrice} from "@/layout/header/cart/cartItem/format-price";
import styles from './styles.module.scss'
const ProductImage:FC<IProductDetails> = ({product}) => {
    return (
        <div className={styles.image}>
          <Image src={product.images[0]} alt={product.name} width={250} height={250} />
            <div>{formatPrice(product.price)}</div>
        </div>
    );
};

export default ProductImage;