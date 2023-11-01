import { SizesType } from "@/app/types/cartitem.interface";
import { IProduct } from "@/app/types/product.interface";
import { useActions } from "@/app/hooks/useActions";
import { Button } from "@chakra-ui/react";
import React, { FC } from "react";

const CarouselButton: FC<{ product: IProduct; size: SizesType }> = ({
  product,
  size,
}) => {
  const { addToCart } = useActions();
const handleAddToCart=(e)=>{
    addToCart({ product, quantity: 1, size: size })
    e.stopPropagation()
}
  return (
    <div className={"flex justify-center"}>
      <Button
        variant={"outline"}
        onClick={(e)=>{handleAddToCart(e)}}
        bg={"white"}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default CarouselButton;