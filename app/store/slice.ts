import { ICartItem, SizesType } from "@/app/types/cartitem.interface";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { cart } from "@/app/data/cart.data";

export interface IInitialState {
  items: ICartItem[];
}

const initialState: IInitialState = {
  items: cart,
};

interface IAddToCart extends Omit<ICartItem, "id"> {
  size: SizesType;
}

interface IChangeQuantityPayload extends Pick<ICartItem, "id"> {
  type: "plus" | "minus";
}

interface IChangeSizePayload extends Pick<ICartItem, "id"> {
  size: SizesType;
}

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

    const newArray= state.items.filter(el=>(
      el.product.id===action.payload.product.id
    ))
      if(!newArray)  state.items.push({ id:state.items.length + 1, ...action.payload });

      const isExistSize = newArray.some(
        item => item.size === action.payload.size);
      if (!isExistSize) {

        state.items.push({ id:state.items.length + 1, ...action.payload });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, changeQuantity } = cartSlice.actions;

// export const selectCount = (state: RootState) => state.items

export default cartSlice.reducer;