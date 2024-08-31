import {getAllCategories } from "../thunk/thunkIndex";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  catgories: [],

  isLoading: false,
  isError: false,
  count: 0,
};
const categorySlice = createSlice({
  name: "category",
  initialState,

  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getAllCategories.fulfilled, (state, { payload }) => {
      state.data = payload.data;
      state.isLoading = false;
    }).addCase(getAllCategories.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default categorySlice.reducer;
