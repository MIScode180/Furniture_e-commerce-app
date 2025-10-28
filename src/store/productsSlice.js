import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {
    setProductsLoading(state, action) {
      state.loading = action.payload;
    },
    setProducts(state, action) {
      state.list = action.payload;
      state.error = null;
    },
    setProductsError(state, action) {
      state.error = action.payload;
    }
  }
});

export const { setProductsLoading, setProducts, setProductsError } = productsSlice.actions;
export default productsSlice.reducer;
