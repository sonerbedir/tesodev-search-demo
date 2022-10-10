import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/dataSlice";
import errorSlice from "../features/errorSlice";

const store = configureStore({
    reducer:{
        data: dataSlice,
        error: errorSlice
    }
});

export default store;