'use client'
import CarouselItem from "@/ui/catalog/carousel/carousel-item/CarouselItem";
import { IProduct } from "@/app/types/product.interface";
import styles from "./styles.module.scss";
import React, {FC, useState} from "react";

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
  const [selectedItem, setSelectedItem]=useState<number|null>(null)
  const [isActive, setIsActive]=useState(false)
  return (
    <div className={styles.container}>
      {products.map((item) => (
        <CarouselItem product={item} key={item.id} selectedItem={selectedItem} setSelectedItem={setSelectedItem} isActive={isActive} setIsActive={setIsActive}/>
      ))}
    </div>
  );
};

export default Carousel;