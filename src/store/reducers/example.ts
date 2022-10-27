import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "user",
  initialState: {
    products: null,
  },
  reducers: {
    setProducts: () => {
      console.log("reducer");
    },
  },
});

export const exampleActions = storeSlice.actions;
export default storeSlice.reducer;
