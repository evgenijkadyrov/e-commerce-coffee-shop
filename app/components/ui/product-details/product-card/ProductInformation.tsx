"use client";
import { IProductDetails } from "@/app/types/product.interface";
import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import cn from "clsx";

interface IProductInformation extends IProductDetails {
  selectIconImage: number;
  setSelectIconImage: Dispatch<SetStateAction<number>>;
}

const ProductInformation: FC<IProductInformation> = ({
  product,
  setSelectIconImage,
  selectIconImage,
}) => {
  return (
    <div className={styles.information}>
      <h2>{product.name}</h2>
      <div>
        <p>{product.description}</p>
      </div>
      <div className={styles.imageIcon}>
        {product.images.map((image, index) => (
          <button
            key={image}
            onClick={() => setSelectIconImage(index)}
            className={cn({
              [styles.active]: selectIconImage === index,
            })}
          >
            <Image src={image} alt={""} width={100} height={100} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductInformation;