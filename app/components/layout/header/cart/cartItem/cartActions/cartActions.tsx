"use client";
import { Button, HStack, useNumberInput } from "@chakra-ui/react";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import React, { FC } from "react";

import { ICartItem } from "@/app/types/cartitem.interface";
import { useActions } from "@/app/hooks/useActions";
import { useCart } from "@/app/hooks/useCart";

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
  const { cart } = useCart();
  const quantity = cart.find((el) => el.id === item.id).quantity;
  const { removeFromCart, changeQuantity } = useActions();
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: quantity,
      min: 1,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="320px">
      <Button
        {...dec}
        variant={"outline"}
        onClick={() => changeQuantity({ id: item.id, type: "minus" })}
        disabled={quantity === 1}
      >
        <MinusIcon />
      </Button>
      <Input
        {...input}
        width={"50px"}
        focusBorderColor={"green"}
        bgColor={"white"}

      />
      <Button
        {...inc}
        variant={"outline"}
        onClick={() => changeQuantity({ id: item.id, type: "plus" })}
      >
        <AddIcon />
      </Button>
      <Button onClick={() => removeFromCart({ id: item.id })}>
        <DeleteIcon color={"grey"} />
      </Button>
    </HStack>
  );
};

export default CartActions;