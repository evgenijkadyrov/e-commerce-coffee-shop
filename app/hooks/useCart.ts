import { useAppSelector } from "@/app/hooks/useTypedSelector";

export const useCart = () => {
  const cart = useAppSelector((state) => state.cart.items);

  const totalQuantity = cart.reduce((acc, el) => acc + el.quantity, 0);

  const totalPrice = cart.reduce(
    (acc, el) => acc + el.product.price * el.quantity,

    0
  );

  return { cart, totalPrice, totalQuantity };
};