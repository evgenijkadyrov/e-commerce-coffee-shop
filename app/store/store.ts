import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {configureStore} from "@reduxjs/toolkit";
import {cartSlice} from "@/app/store/sliceCart";
import {combineReducers} from "redux";
import {productsSlice} from "@/app/store/sliceCatalog";

const persistConfig = {
    key: "coffee-app",
    storage,
    whitelist: ["cart"],
};
// ...
const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    catalog: productsSlice.reducer

});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type TypeRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
