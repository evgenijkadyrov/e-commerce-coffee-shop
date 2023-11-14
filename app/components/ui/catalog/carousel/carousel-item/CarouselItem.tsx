"use client";
import AddToCartButton from "@/ui/catalog/carousel/carousel-item/AddToCartButton";
import SizeVariations from "@/ui/catalog/carousel/carousel-item/SizeVariations";
import NavButton from "@/ui/catalog/carousel/carousel-item/NavButton";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { SizesType } from "@/app/types/cartitem.interface";
import { IProduct } from "@/app/types/product.interface";
import styles from "./styles.module.scss";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import cn from "clsx";

interface ICarouselItem {
  product: IProduct;
  isActive: boolean;
  setSelectedItem: (id: number) => void;
  index: number;
  handleItemNavigation: (direction: "next" | "prev") => void;
}

const CarouselItem: FC<ICarouselItem> = ({
  product,
  isActive,
  index,
  setSelectedItem,
  handleItemNavigation,
}) => {
  const [selectedSize, setSelectedSize] = useState<SizesType>("M");

  return (
    <motion.div
      initial={{ scale: 1.0 }}
      animate={isActive ? { scale: 1.12 } : {}}
      transition={{ duration: 0.4, type: "tween" }}
      onClick={() => setSelectedItem(index)}
      className={cn(styles.item, {
        [styles.active]: isActive,
      })}
    >
      <div className={styles.image}>
        {isActive && (
          <NavButton
            handleItemNavigation={handleItemNavigation}
            direction={"prev"}
          >
            <ChevronLeftIcon />
          </NavButton>
        )}

        {product.images && (
          <Image
            src={product.images[0]}
            alt={product.name}
            width={200}
            height={200}
            draggable={false}
          />
        )}
        {isActive && (
          <NavButton
            handleItemNavigation={handleItemNavigation}
            direction={"next"}
          >
            <ChevronRightIcon />
          </NavButton>
        )}
      </div>

      <div className={styles.name}>{product.name}</div>

      {!isActive && (
        <div className={styles.description}>{product.description}</div>
      )}

      {isActive && (
        <>
          <SizeVariations
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <AddToCartButton product={product} size={selectedSize} />
          <div className={"text-lg italic m-3"}>
            <Link href={`product/${product.slug}`}>More information</Link>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CarouselItem;
