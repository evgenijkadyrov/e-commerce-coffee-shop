import {IProduct} from "@/app/types/product.interface";

export interface ICartItem{
    id: number,
    product:IProduct,
    quantity: number
}