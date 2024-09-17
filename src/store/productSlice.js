import {
  getAllProducts,
  getProductById,
  getAllProductsBySaleStatus,
} from "../thunk/thunkIndex";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  products: [],
  data: [],
  isLoading: false,
  newArrived: [],
  bestSellers: [],
  saleItems: [],
  productById: "",
  isError: false,
  count: 0,
};
const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload.data;
      state.newArrived = payload.data.filter(
        (data) => data.saleStatus === "newArrived"
      );
      state.bestSellers = payload.data.filter(
        (data) => data.saleStatus === "bestSellers"
      );
      state.saleItems = payload.data.filter(
        (data) => data.saleStatus === "saleItems"
      );
      state.count = payload.count;
    })
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.productById = payload.data;
      })
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default productSlice.reducer;
