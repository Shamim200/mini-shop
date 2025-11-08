import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/theme";
import cartReducer from "../features/cart/cart";
import { productApi } from "../services/api";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
