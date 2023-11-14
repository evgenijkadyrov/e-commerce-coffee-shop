import { IProduct } from "@/app/types/product.interface";
import type { PayloadAction } from "@reduxjs/toolkit";
import { products } from "@/app/data/cart.data";
import { createSlice } from "@reduxjs/toolkit";

export interface IInitialStateCatalog {
  products: IProduct[];
}

const initialState: IInitialStateCatalog = {
  products: products,
};
const initialProductsState = initialState.products;

export const productsSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    resetCatalog: (state, action: PayloadAction) => {
      state.products = initialProductsState;
    },
    searchProducts: (state, action: PayloadAction) => {
      state.products = initialProductsState.filter((el) => {
        return el.name.toLowerCase().includes(action.payload.toLowerCase())
          ? el
          : null;
      });
    },
  },
});

export const { searchProducts, getAllProducts, resetCatalog } =
  productsSlice.actions;

export default productsSlice.reducer;