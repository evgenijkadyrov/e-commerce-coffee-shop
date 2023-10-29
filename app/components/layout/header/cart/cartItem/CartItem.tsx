"use client"
import React, {FC} from 'react';
import {ICartItem} from "@/app/types/cartitem.interface";
import styles from './style.module.scss'
import Image from "next/image";
import CartActions from "@/layout/header/cart/cartItem/cartActions/cartActions";

const CartItem:FC<{item:ICartItem}> = ({item}) => {

    return (
        <div className={styles.cartItem}>
            <Image src={item.product.images[0]} width={70} height={70}  alt={item.product.name}/>
            <div className={styles.info}>
                <div className={styles.name}>{item.product.name}</div>
                <div className={styles.price}>{new Intl.NumberFormat('ru-RU',{
                    style:'currency',
                    currency: 'USD'
                }).format(item.product.price) }</div>
            <CartActions item={item}/>
            </div>

        </div>
    );
};

export default CartItem;