import { SizesType } from "@/app/types/cartitem.interface";
import { IProduct } from "@/app/types/product.interface";
import { useActions } from "@/app/hooks/useActions";
import { useCart } from "@/app/hooks/useCart";
import { Button } from "@chakra-ui/react";
import React, { FC } from "react";

const AddToCartButton: FC<{ product: IProduct; size: SizesType }> = ({
  product,
  size,
}) => {
  const { addToCart } = useActions();
  const cart = useCart();
  const currentItem = cart.cart.find(
    (item) => item.product.id === product.id && item.size === size
  );
  const handleAddToCart = (e) => {
    addToCart({ product, quantity: 1, size: size });
    e.stopPropagation();
  };
  return (
    <div className={"flex justify-center"}>
      <Button
        variant={"outline"}
        onClick={(e) => {
          handleAddToCart(e);
        }}
        bg={"white"}
      >
        {currentItem ? "Add +1" : "Add to cart"}
      </Button>
    </div>
  );
};

export default AddToCartButton;