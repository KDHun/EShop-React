import { configureStore } from "@reduxjs/toolkit";
import billItems from "./billItemsSlice";
import auth from "./auth";

const store = configureStore({
  reducer: { billItems: billItems, auth:auth },
});


export default store;
