import {IProduct} from "@/app/types/product.interface";


export type SizesType = "S"| "M"| "XL"| "XXL"

export interface ICartItem{
    id: number,
    product:IProduct,
    quantity: number,
    size: SizesType
}