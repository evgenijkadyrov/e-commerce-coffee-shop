import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "@/app/store/slice";
import { combineReducers } from "redux";
// ...
const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type TypeRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
