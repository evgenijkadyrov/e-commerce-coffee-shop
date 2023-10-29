"use client";
import CartItem from "@/layout/header/cart/cartItem/CartItem";
import styles from "./styles.module.scss";
import React, { FC, useState } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import { Button } from "@chakra-ui/react";
import {useSelector} from "react-redux";

const Cart: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = React.useRef<HTMLButtonElement>(null);

  //const cart = useTypedSelector((state) => state.cart.items);
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className={styles["wrapper-cart"]}>
      <button
        className={styles.heading}
        onClick={() => setIsOpen(!isOpen)}
        ref={btnRef}
      >
        <span className={styles.badge}>1</span>
        <span className={styles.text}>My basket</span>
      </button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => setIsOpen(!isOpen)}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={"green.50"}>
          <DrawerCloseButton />
          <DrawerHeader>Your cart</DrawerHeader>

          <DrawerBody maxHeight={"none"}>
            <div className={styles.cart}>
              {cart.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          </DrawerBody>

          <DrawerFooter
            justifyContent={"space-between"}
            borderTop={"#737371"}
            borderTopWidth={2}
          >
            <div className={styles.footer}>
              <div>Total:</div>
              <div>100$</div>
            </div>
            <Button
              variant={"outline"}
              margin={6}
              mb={5}
              _hover={{ backgroundColor: "green", color: "white" }}
              size={"lg"}
            >
              Buy
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Cart;