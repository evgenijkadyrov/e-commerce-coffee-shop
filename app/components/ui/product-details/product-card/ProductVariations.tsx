'use client'
import React, {FC, useState} from 'react';
import styles from './styles.module.scss'
import {Box} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";
import {IProductDetails} from "@/app/types/product.interface";
import ProductRating from "@/ui/product-details/product-card/ProductRating";
import SizeVariations from "@/ui/catalog/carousel/carousel-item/SizeVariations";
import {SizesType} from "@/app/types/cartitem.interface";
import AddToCartButton from "@/ui/catalog/carousel/carousel-item/AddToCartButton";

const ProductVariations:FC<IProductDetails> = ({product}) => {
    const [selectedSize, setSelectedSize]= useState<SizesType>("M")
    return (
        <div className={styles.variations}>
           <ProductRating product={product}/>
            <SizeVariations selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
            <AddToCartButton product={product} size={selectedSize}/>
        </div>
    );
};

export default ProductVariations;