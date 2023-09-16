import { createSlice } from "@reduxjs/toolkit";

export const currencyReducer = createSlice({
  name: "currency",
  initialState: {
    currency: "mxn",
    isSuccess: true,
    isFetching: false,
    isError: false,
  },
  reducers: {
    setCurrencyReducer: (state) => {
      state.isSuccess = true;
      state.isFetching = false;
      state.isError = false;
    },
  },
});

export const { setCurrencyReducer } = currencyReducer.actions;
export default currencyReducer.reducer;
