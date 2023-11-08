"use client";
import React, { Dispatch, FC, SetStateAction } from "react";

import { SizesType } from "@/app/types/cartitem.interface";
import { sizes } from "@/app/data/cart.data";
import styles from "./styles.module.scss";
import { Button } from "@chakra-ui/react";
import cn from "clsx";

interface ICarouselSizeItem {
  selectedSize: SizesType;
  setSelectedSize: Dispatch<SetStateAction<SizesType>>;
}

const CarouselSizeItem: FC<ICarouselSizeItem> = ({
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div className={styles.sizeItems}>
      {sizes.map((el) => (
        <Button
          className={cn(styles.sizeBtn, {
            [styles.active]: selectedSize === el,
          })}
          variant={"outline"}
          bg={"white"}
          onClick={() => {
            setSelectedSize(el);
          }}
        >
          {el}
        </Button>
      ))}
    </div>
  );
};

export default CarouselSizeItem;