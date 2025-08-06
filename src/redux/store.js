import { configureStore } from "@reduxjs/toolkit";

import smokerReducer from "./slices/smokerSlice.js";

const store = configureStore({
  reducer: {
    smoker: smokerReducer,
  },
});

export default store;
