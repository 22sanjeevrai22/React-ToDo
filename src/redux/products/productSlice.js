import { createSlice } from "@reduxjs/toolkit";
import { getProductsThunk } from "./productActions";

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
