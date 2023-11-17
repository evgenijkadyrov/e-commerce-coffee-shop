"use client";
import CarouselItem from "@/ui/catalog/carousel/carousel-item/CarouselItem";
import { IProduct } from "@/app/types/product.interface";
import styles from "./styles.module.scss";
import React, { FC, useState } from "react";

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemNavigation = (direction) => {
    if (direction === "next" && selectedItem < products.length - 1) {
      setSelectedItem((prevSelectedItem) => prevSelectedItem + 1);
    } else if (direction === "prev" && selectedItem > 0) {
      setSelectedItem((prevSelectedItem) => prevSelectedItem - 1);
    }
  };

  return (
    <div className={styles.container} onClick={()=>setSelectedItem(null)}>
      {products.map((item, index) => (
        <CarouselItem
          product={item}
          key={item.id}
          isActive={index === selectedItem}
          index={index}
          setSelectedItem={setSelectedItem}
          handleItemNavigation={handleItemNavigation}
        />
      ))}
    </div>
  );
};

export default Carousel;