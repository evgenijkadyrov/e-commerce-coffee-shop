"use client";
import {IProduct} from "@/app/types/product.interface";
import {useActions} from "@/app/hooks/useActions";
import styles from "./styles.module.scss";
import {Button} from "@chakra-ui/react";
import React, {FC, useState} from "react";
import Image from "next/image";
import cn from "clsx";
import CarouselSizeItem from "@/ui/catalog/carousel/carousel-item/CarouselSizeItem";
import {SizesType} from "@/app/types/cartitem.interface";
import CarouselButton from "@/ui/catalog/carousel/carousel-item/CarouselButton";

interface ICarouselitem{
    product: IProduct,
    setSelectedItem:(number)=>void,
    selectedItem:number|null,
    isActive:boolean,
    setIsActive:(boolean)=>void
}
const CarouselItem: FC<ICarouselitem> = ({product, selectedItem,setSelectedItem, isActive, setIsActive}) => {
    const [selectedSize, setSelectedSize]=useState<SizesType>("M")
const handleActiveItem=()=>{

    setSelectedItem(product.id)
    setIsActive(!isActive)
}
    const Active = product.id === selectedItem;
    const {addToCart} = useActions();
    return (
        <div onClick={handleActiveItem}
            className={cn(styles.item, {
                [styles.active]: isActive && Active,
            })}
        >
            <div className={styles.image}>
                {product.images && (
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={200}
                        height={200}
                    />
                )}
            </div>

            <div className={styles.name}>{product.name}</div>

            {!isActive && (
                <div className={styles.description}>{product.description}</div>
            )}
            {isActive && ( <>
                    <CarouselSizeItem selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
                    <CarouselButton product={product} size={selectedSize}  />
            </>

            )}
        </div>
    );
};

export default CarouselItem;
