'use client'
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import Link from "next/link";
import React from "react";
import cn from "clsx";
import styles from './styles.module.scss'
import {useProductsNavigation} from "@/app/hooks/useProductsNavigation";

const ProductsNavigation = ({productId}) => {

    const {isNextProductSlug,isPrevProductSlug}=useProductsNavigation(productId)
    return (
        <div className={styles.nav} >
            <Link href={`/product/${isPrevProductSlug}`} bg={"inherit"} className={cn({
                [styles.disabled]: !isPrevProductSlug
            })}  >
                <ChevronLeftIcon/>
            </Link>
            <Link href={`/product/${isNextProductSlug}`} bg={"inherit"} className={cn({
                [styles.disabled]: !isNextProductSlug
            })}>
                <ChevronRightIcon/>
            </Link>
        </div>
    );
};

export default ProductsNavigation;