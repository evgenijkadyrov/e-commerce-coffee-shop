import { EnumSorting } from "@/ui/catalog/sorting/enumSorting";
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

// Define a function that sorts an array of products by a given criterion
function sortProducts(products: IProduct[], criterion: EnumSorting): IProduct[] {
  switch (criterion) {
    case EnumSorting.NEWEST:
      return products.sort((a, b) => b.id - a.id);
    case EnumSorting.OLDEST:
      return products.sort((a, b) => a.id - b.id);
    case EnumSorting.UP_PRICE:
      return products.sort((a, b) => a.price - b.price);
    case EnumSorting.DOWN_PRICE:
      return products.sort((a, b) => b.price - a.price);
    default:
      return products;
  }
}

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
    sortingCatalog: (state, action: PayloadAction<EnumSorting>) => {
      // Use the sortProducts function to get a new sorted array
      state.products = sortProducts([...state.products], action.payload);
    },
  },
});

export const { searchProducts, getAllProducts, resetCatalog, sortingCatalog } =
  productsSlice.actions;

export default productsSlice.reducer;