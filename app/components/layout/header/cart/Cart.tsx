"use client"
import CartItem from "@/layout/header/cart/cartItem/CartItem";
import styles from "./styles.module.scss";
import React, {FC, useState} from "react";
import {cart} from "@/app/data/cart.data";
import {
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay
} from "@chakra-ui/modal";
import {Button} from "@chakra-ui/react";

const Cart: FC = () => {
    const [isOpen, setIsOpen]= useState(false)
    const btnRef = React.useRef<HTMLButtonElement>(null)
    return (
        <div className={styles["wrapper-cart"]}>
            <button className={styles.heading} onClick={()=>setIsOpen(!isOpen)} ref={btnRef}>
                <span className={styles.badge}>1</span>
                <span className={styles.text}>My basket</span>
            </button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={()=>setIsOpen(!isOpen)}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent backgroundColor={'green.50'} >
                    <DrawerCloseButton />
                    <DrawerHeader>Your cart</DrawerHeader>

                    <DrawerBody maxHeight={'none'} >
                        <div className={styles.cart}>
                            {cart.map(item=><CartItem item={item}/> )}
                        </div>}
                    </DrawerBody>

                    <DrawerFooter  >
                        <Button variant={'outline'} margin={6} mb={5} _hover={{backgroundColor:'green', color:'white'}} size={"lg"} width={'full'}>Buy</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>


        </div>
    );
};

export default Cart;