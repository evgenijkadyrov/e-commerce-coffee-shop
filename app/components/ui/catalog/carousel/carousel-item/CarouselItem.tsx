
"use client";
import {IProduct} from "@/app/types/product.interface";
import {useActions} from "@/app/hooks/useActions";
import styles from "./styles.module.scss";
import React, {FC} from "react";
import Image from "next/image";
import cn from "clsx";
import {Button} from "@chakra-ui/react";

const CarouselItem: FC<{ product: IProduct }> = ({product}) => {
    const isActive = product.id === 2;
    const { addToCart}=useActions()
    return (
        <div
            className={cn(styles.item, {
                [styles.active]: isActive,
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
            {isActive &&  <div className={'flex justify-center'}>
                <Button variant={'outline'} onClick={()=>{addToCart({product, quantity:1})}} bg={"white"}>Add to cart</Button>
            </div>}

        </div>
    );
};

export default CarouselItem;
