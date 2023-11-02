"use client";
import CarouselSizeItem from "@/ui/catalog/carousel/carousel-item/CarouselSizeItem";
import CarouselButton from "@/ui/catalog/carousel/carousel-item/CarouselButton";
import NavButton from "@/ui/catalog/carousel/carousel-item/NavButton";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { SizesType } from "@/app/types/cartitem.interface";
import { IProduct } from "@/app/types/product.interface";
import styles from "./styles.module.scss";
import React, { FC, useState } from "react";
import Image from "next/image";
import cn from "clsx";

interface ICarouselItem {
  product: IProduct;
  isActive: boolean;
  setSelectedItem: (id: number) => void;
  id: number;
  handleItemNavigation: () => void;
}

const CarouselItem: FC<ICarouselItem> = ({
  product,
  isActive,
  id,
  setSelectedItem,
  handleItemNavigation,
}) => {
  const [selectedSize, setSelectedSize] = useState<SizesType>("M");

  return (
    <button
      onClick={() => setSelectedItem(id)}
      className={cn(styles.item, {
        [styles.active]: isActive,
      })}
    >
      <div className={styles.image}>
        {isActive && (
            <NavButton handleItemNavigation={handleItemNavigation} nav={"prev"}>
              <ChevronLeftIcon />
            </NavButton>
                 )}

        {product.images && (
          <Image
            src={product.images[0]}
            alt={product.name}
            width={200}
            height={200}
          />
        )}
        {isActive && (
            <NavButton handleItemNavigation={handleItemNavigation} nav={'next'}>
                 <ChevronRightIcon /></NavButton>
        )}
      </div>

      <div className={styles.name}>{product.name}</div>

      {!isActive && (
        <div className={styles.description}>{product.description}</div>
      )}

      {isActive && (
        <>
          <CarouselSizeItem
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <CarouselButton product={product} size={selectedSize} />
        </>
      )}
    </button>
  );
};

export default CarouselItem;
