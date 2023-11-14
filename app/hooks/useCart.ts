"use client";
import { useAppSelector } from "@/app/hooks/useTypedSelector";
import { ICartItem } from "@/app/types/cartitem.interface";

export const useCart = () => {
  const cart: ICartItem[] = useAppSelector((state) => state.cart.items);
  const totalQuantity = cart.reduce((acc, el) => acc + el.quantity, 0);

  const totalPrice = cart.reduce(
    (acc, el) => acc + el.product.price * el.quantity,
    0
  );

  return { cart, totalPrice, totalQuantity };
};