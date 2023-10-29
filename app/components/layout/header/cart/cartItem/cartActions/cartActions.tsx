"use client"
import React, {FC} from 'react';
import {Button, HStack, useNumberInput} from "@chakra-ui/react";
import {Input} from "@chakra-ui/input";
import {AddIcon, DeleteIcon, MinusIcon} from "@chakra-ui/icons";

import {useActions} from "@/app/hooks/useActions";
import {ICartItem} from "@/app/types/cartitem.interface";

const CartActions:FC<{item:ICartItem}> = ({item}) => {

    const {removeFromCart }= useActions()
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,

        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
        <HStack maxW='320px'>
            <Button {...dec} variant={'outline'}>
                <MinusIcon/>
            </Button>
            <Input {...input}  width={'50px'} focusBorderColo r={'green'} bgColor={'white'}/>
            <Button {...inc} variant={'outline'} >
                <AddIcon/>

            </Button>
            <Button onClick={()=>removeFromCart({id:item.id})}><DeleteIcon color={'grey'} /></Button>
        </HStack>
    )
};

export default CartActions;