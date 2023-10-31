import { ICartItem } from "@/app/types/cartitem.interface";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { cart } from "@/app/data/cart.data";

interface IInitialState {
  items: ICartItem[];
}

const initialState: IInitialState = {
  items: cart,
};

interface IAddToCart extends Omit<ICartItem, "id"> {}
interface IChangeQuantityPayload extends Pick<ICartItem, "id"> {
  type:"plus"| "minus"
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const{ id, type}= action.payload
      const item = state.items.find((el) => el.id === id);
      if (item) { type==="plus" ?
        item.quantity++ :item.quantity>1? item.quantity--: item.quantity;
      }


    },
    addToCart: (state, action: PayloadAction<IAddToCart>) => {
      const id = state.items.length;
      state.items = state.items.push({ ...action.payload, id });
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, changeQuantity } = cartSlice.actions;

// export const selectCount = (state: RootState) => state.items

export default cartSlice.reducer;