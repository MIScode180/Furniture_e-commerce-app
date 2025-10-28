// src/store/slices/ordersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {
    setOrdersLoading(state, action) {
      state.loading = action.payload;
    },
    setOrders(state, action) {
      state.list = action.payload;
      state.error = null;
    },
    setOrdersError(state, action) {
      state.error = action.payload;
    }
  }
});


export const { setOrdersLoading, setOrders, setOrdersError } = ordersSlice.actions;
export default ordersSlice.reducer;

