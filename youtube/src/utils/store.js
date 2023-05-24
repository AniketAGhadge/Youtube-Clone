import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./navBarSlice";


const store = configureStore({
    reducer : {
        app : navBarSlice,
    },
});

export default store;