import { configureStore } from "@reduxjs/toolkit";
import verifyLogin from "./slices/verifyLogin";

export const Store = configureStore({
  reducer: {
    verifyLogin
  },
});