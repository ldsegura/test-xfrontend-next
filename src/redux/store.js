import { configureStore } from "@reduxjs/toolkit";
import pageDataReducer from "./features/pageDataReducer";
import currencyReducer from "./features/currencyReducer";
import { pageDataApi } from "./services/pageDataApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer:{
        pageDataReducer,
        currencyReducer,
        [pageDataApi.reducerPath]: pageDataApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        pageDataApi.middleware
    ])
})

setupListeners(store.dispatch);