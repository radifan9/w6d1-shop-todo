import { configureStore } from "@reduxjs/toolkit";

import smokerReducer from "./slices/smokerSlice.js";
import todoReducer from "./slices/todoSlice.js";

const store = configureStore({
  reducer: {
    smoker: smokerReducer,
    todo: todoReducer,
  },
});

export default store;
