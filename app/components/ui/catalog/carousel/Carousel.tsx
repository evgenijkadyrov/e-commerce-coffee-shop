"use client";
import CarouselItem from "@/ui/catalog/carousel/carousel-item/CarouselItem";
import {IProduct} from "@/app/types/product.interface";
import styles from "./styles.module.scss";
import React, {FC, useState} from "react";

const Carousel: FC<{ products: IProduct[] }> = ({products}) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  console.log("select", selectedItem);

  const handleItemNavigation = (direction) => {
    if (direction === "next" && selectedItem < products.length) {
      setSelectedItem((prevSelectedItem) => prevSelectedItem + 1);
    } else if (direction === "prev" && selectedItem > 1) {
      setSelectedItem((prevSelectedItem) => prevSelectedItem - 1);
    }
  };

  return (
      <div className={styles.container}>
        {products.map((item) => (
            <CarouselItem
                product={item}
                key={item.id}
                isActive={item.id === selectedItem}
                id={item.id}
                setSelectedItem={setSelectedItem}
                handleItemNavigation={handleItemNavigation}
            />
        ))}
      </div>
  );
};

export default Carousel;