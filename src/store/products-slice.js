// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import ProductsService from "../apis/productsApi";

// export const fetchProducts = createAsyncThunk("products/fetch", async () => {
//   const res = await ProductsService.getAllCategories();
//   return res;
// });

// export const productSlice = createSlice({
//   name: "products",
//   initialState: [],
//   extraReducers: {
//     [fetchProducts.fulfilled]: (state, action) => {
//       state.data = [...action.payload];
//     },
//   },
// });

// const { reducer } = productSlice;
// export default reducer;
