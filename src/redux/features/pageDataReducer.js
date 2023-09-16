import { createSlice } from "@reduxjs/toolkit";

export const pageDataReducer = createSlice({
  name: "pageData",
  initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    data: {
    },
  },
  reducers: {
    getReducer: (state) => {
      state.isSuccess = true;
      state.isFetching = false;
      state.isError = false;
    },
    loadingReducer: (state) => {
      state.isSuccess = false;
      state.isFetching = true;
      state.isError = false;
    },
    errorReducer: (state) => {
      state.isSuccess = false;
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { get, loading, error } = pageDataReducer.actions;
export default pageDataReducer.reducer;
