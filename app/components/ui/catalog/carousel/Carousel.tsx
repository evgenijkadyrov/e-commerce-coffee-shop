import CarouselItem from "@/ui/catalog/carousel/carousel-item/CarouselItem";
import { IProduct } from "@/app/types/product.interface";
import styles from "./styles.module.scss";
import React, { FC } from "react";

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((item) => (
        <CarouselItem product={item} key={item.id} />
      ))}
    </div>
  );
};

export default Carousel;