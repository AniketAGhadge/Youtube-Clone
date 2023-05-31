import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./navBarSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: navBarSlice,
    search: searchSlice,
  },
});

export default store;
