"use client";
import { EnumSorting } from "@/ui/catalog/sorting/enumSorting";
import Carousel from "@/ui/catalog/carousel/Carousel";
import { products as data } from "@/app/data/cart.data";
import Sorting from "@/ui/catalog/sorting/Sorting";
import styles from "./styles.module.scss";
import React, { FC, useState } from "react";

const Catalog: FC = () => {
  const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST);
  return (
    <div className={styles.container}>
      <div className={"text-right mb-8 mt-8 "}>
        <Sorting sortType={sortType} setSortType={setSortType} />
      </div>
      <Carousel products={data} />
    </div>
  );
};

export default Catalog;