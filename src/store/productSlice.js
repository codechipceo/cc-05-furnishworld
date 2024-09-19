import { getAllProducts, getDOM, getProductById } from "../thunk/thunkIndex";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  products: [],
  data: [],
  isLoading: false,
  productById: "",
  isError: false,
  count: 0,
  dOM: {},
};
const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.data = payload.data;
      state.isLoading = false;
      state.count = payload.count;
    }).addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    addCase(getDOM.fulfilled, (state, { payload }) => {
      state.dOM = payload.data[0];
      state.isLoading = false;
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
