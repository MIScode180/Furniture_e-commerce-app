// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import authSlice from "../store/AuthSlice";
// import productsSlice from "../store/productsSlice";
// import orderSlice from "../store/ordersSlice";
// import cartReducer from "../store/cartSlice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const persistConfig = {
//   key: "cart",
//   storage,
// };

// const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// const store = configureStore({
//   reducer: {
//     auth: authSlice,
//     orders: orderSlice,
//     products: productsSlice,
//     cart: cartReducer,
//   },

//   reducer: persistedCartReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         // Ignore redux-persist action types that include functions
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
// export default store;


// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "../store/AuthSlice";
import productsSlice from "../store/productsSlice";
import orderSlice from "../store/ordersSlice";
import cartReducer from "../store/cartSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist only the cart slice
const cartPersistConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

// Combine all reducers; use persisted reducer only for cart
const rootReducer = combineReducers({
  auth: authSlice,
  orders: orderSlice,
  products: productsSlice,
  cart: persistedCartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
