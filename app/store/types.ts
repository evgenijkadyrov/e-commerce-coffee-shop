import {ICartItem, SizesType} from "app/types/cartitem.interface";

export interface IInitialState {
    items: ICartItem[];
}
export interface IAddToCart extends Omit<ICartItem, "id"> {
    size: SizesType;
}

export interface IChangeQuantityPayload extends Pick<ICartItem, "id"> {
    type: "plus" | "minus";
}

export interface IChangeSizePayload extends Pick<ICartItem, "id"> {
    size: SizesType;
}