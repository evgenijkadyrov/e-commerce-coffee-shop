"use client";
import ProductNotFound from "@/components/productNotFound/ProductNotFound";
import BreadcrumbProduct from "@/ui/product-details/breadcrumb/Breadcrumb";
import { EnumSorting } from "@/ui/catalog/sorting/enumSorting";
import { useAppSelector } from "@/app/hooks/useTypedSelector";
import Carousel from "@/ui/catalog/carousel/Carousel";
import Sorting from "@/ui/catalog/sorting/Sorting";
import styles from "./styles.module.scss";
import React, { FC, useState } from "react";

const Catalog: FC = () => {
  const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.OLDEST);
  const products = useAppSelector((state) => state.catalog.products);
  return (
    <div className={styles.container}>
      <div className={"flex justify-between items-center"}>
        <div>
          <BreadcrumbProduct productName={""} />
        </div>

        <div className={"text-right mb-8 mt-8 "}>
          <Sorting sortType={sortType} setSortType={setSortType} />
        </div>
      </div>

      {products.length !== 0 ? (
        <Carousel products={products} />
      ) : (
        <ProductNotFound />
      )}
    </div>
  );
};

export default Catalog;