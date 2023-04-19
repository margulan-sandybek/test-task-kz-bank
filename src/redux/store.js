import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slice/filterSlice"
import tempDataReducer from "./slice/tempDataSlice"

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        tempData: tempDataReducer,
    },
});