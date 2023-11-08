import React, {FC} from 'react';
import styles from './styles.module.scss'
import ProductInformation from "@/ui/product-details/product-card/ProductInformation";
import ProductImage from "@/ui/product-details/product-card/ProductImage";
import ProductVariations from "@/ui/product-details/product-card/ProductVariations";
import {IProductDetails} from "@/app/types/product.interface";
const ProductCard:FC<IProductDetails> = ({product}) => {
    return (
        <div className={styles.card}>
            <ProductInformation product={product}/>
            <ProductImage product={product}/>
            <ProductVariations product={product}/>
        </div>
    );
};

export default ProductCard;