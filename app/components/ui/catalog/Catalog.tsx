import { IProduct } from "@/app/types/product.interface";
import Carousel from "@/ui/catalog/carousel/Carousel";
import { products as data } from "@/app/data/cart.data";
import styles from "./styles.module.scss";
import React, { FC } from "react";

const Catalog: FC<{ data: IProduct[] }> = () => {
  return (
    <div className={styles.container}>
      <Carousel products={data} />
    </div>
  );
};

export default Catalog;