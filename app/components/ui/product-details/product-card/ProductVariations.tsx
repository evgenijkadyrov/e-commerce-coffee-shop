"use client";
import AddToCartButton from "@/ui/catalog/carousel/carousel-item/AddToCartButton";
import SizeVariations from "@/ui/catalog/carousel/carousel-item/SizeVariations";
import ProductRating from "@/ui/product-details/product-card/ProductRating";
import {IProductDetails} from "@/app/types/product.interface";
import {SizesType} from "@/app/types/cartitem.interface";
import styles from "./styles.module.scss";
import React, {FC, useState} from "react";

const ProductVariations: FC<IProductDetails> = ({product}) => {
    const [selectedSize, setSelectedSize] = useState<SizesType>("M");
    return (
        <div className={styles.variations}>
            <div className={styles.rating}>
                <ProductRating product={product}/>
            </div>
            <div className={styles.sizes}>
                <SizeVariations
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                />
            </div>
            <div className={styles.btnToCart}>
                <AddToCartButton product={product} size={selectedSize}/>
            </div>
        </div>
    );
};

export default ProductVariations;