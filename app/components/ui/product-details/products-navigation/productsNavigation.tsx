"use client";
import { useProductsNavigation } from "@/app/hooks/useProductsNavigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import styles from "./styles.module.scss";
import Link from "next/link";
import React, {FC} from "react";
import cn from "clsx";
interface IProductNavigation{
    productId:number
}
const ProductsNavigation:FC<IProductNavigation> = ({ productId }) => {
  const { isNextProductSlug, isPrevProductSlug } =
    useProductsNavigation(productId);
  return (
    <div className={styles.nav}>
      <Link
        href={`/product/${isPrevProductSlug}`}
        bg={"inherit"}
        className={cn({
          [styles.disabled]: !isPrevProductSlug,
        })}
      >
        <ChevronLeftIcon />
      </Link>
      <Link
        href={`/product/${isNextProductSlug}`}
        bg={"inherit"}
        className={cn({
          [styles.disabled]: !isNextProductSlug,
        })}
      >
        <ChevronRightIcon />
      </Link>
    </div>
  );
};

export default ProductsNavigation;