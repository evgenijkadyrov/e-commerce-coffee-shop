import {
  IAddToCart,
  IChangeQuantityPayload,
  IChangeSizePayload,
  IInitialState,
} from "@/app/store/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const { id, type } = action.payload;

      const item = state.items.find((el) => el.id === id);
      if (item) {
        type === "plus"
          ? item.quantity++
          : item.quantity > 1
          ? item.quantity--
          : item.quantity;
      }
    },
    changeSize: (state, action: PayloadAction<IChangeSizePayload>) => {
      const { id, size } = action.payload;
      const item = state.items.find((el) => el.id === id);
      if (item) item.size = size;
    },
    addToCart: (state, action: PayloadAction<IAddToCart>) => {
      state.items.push({ id: state.items.length + 1, ...action.payload });
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;