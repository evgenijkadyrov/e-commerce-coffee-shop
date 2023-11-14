"use client";
import CartActions from "@/layout/header/cart/cartItem/cartActions/cartActions";
import {formatPrice} from "@/layout/header/cart/cartItem/format-price";
import {ICartItem} from "@/app/types/cartitem.interface";
import styles from "./style.module.scss";
import React, {FC} from "react";
import Image from "next/image";

const CartItem: FC<{ item: ICartItem }> = ({item}) => {
    return (
        <div className={styles.cartItem}>
            <Image
                src={item.product.images[0]}
                width={70}
                height={70}
                alt={item.product.name}
            />
            <div className={styles.info}>
                <div className={styles.name}>{item.product.name}</div>
                <div className={styles.price}>{formatPrice(item.product.price)}</div>
                <div>{item.size}</div>
                <CartActions item={item}/>
            </div>
        </div>
    );
};

export default CartItem;