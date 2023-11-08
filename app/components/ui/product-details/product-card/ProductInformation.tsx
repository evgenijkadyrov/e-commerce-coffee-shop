"use client";
import {IProductDetails} from "@/app/types/product.interface";
import React, {FC} from "react";
import Image from "next/image";
import styles from './styles.module.scss'

const ProductInformation: FC<IProductDetails> = ({product}) => {
    return (
        <div className={styles.description}>
            <h1>{product.name}</h1>
            <div>
                <p>{product.description}</p>
            </div>
            {product.images.map((image) => (
                <button key={image}>
                    <Image src={image} alt={""} width={100} height={100}/>
                </button>
            ))}
        </div>
    );
};

export default ProductInformation;