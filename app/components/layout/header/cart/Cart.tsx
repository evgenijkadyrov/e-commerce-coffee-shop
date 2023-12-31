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
import { formatPrice } from "@/layout/header/cart/cartItem/format-price";
import ModalBuy from "@/layout/header/cart/modalBuy/ModalBuy";
import { useDisclosure } from "@chakra-ui/hooks";
import { useCart } from "@/app/hooks/useCart";
import { Button } from "@chakra-ui/react";

const Cart: FC = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef<HTMLButtonElement>(null);

  const { cart, totalQuantity, totalPrice } = useCart();

  return (
    <div className={styles["wrapper-cart"]}>
      <button
        className={styles.heading}
        onClick={() => setIsOpenCart(!isOpenCart)}
        ref={btnRef}
      >
        <span className={styles.badge}>{totalQuantity}</span>
        <span className={styles.text}>My cart</span>
      </button>

      <Drawer
        isOpen={isOpenCart}
        placement="right"
        onClose={() => setIsOpenCart(!isOpenCart)}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={"green.50"} maxWidth={"max"}>
          <DrawerCloseButton />
          <DrawerHeader>Your cart</DrawerHeader>

          <DrawerBody maxHeight={"none"}>
            <div className={styles.cart}>
              {cart.length !== 0 ? (
                cart.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))
              ) : (
                <div>Cart is Empty</div>
              )}
            </div>
          </DrawerBody>
          <ModalBuy isOpen={isOpen} onClose={() => onClose()} />
          <DrawerFooter
            justifyContent={"space-between"}
            borderTop={"#737371"}
            borderTopWidth={2}
          >
            <div className={styles.footer}>
              <div>Total:</div>
              <div>{formatPrice(totalPrice)} </div>
            </div>
            <Button
              bg={"green.200"}
              margin={6}
              mb={5}
              _hover={{ backgroundColor: "green.500", color: "white" }}
              size={"lg"}
              onClick={onOpen}
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