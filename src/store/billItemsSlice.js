import { createSlice } from "@reduxjs/toolkit";

const billItemsSlice = createSlice({
  name: "billItems",
  initialState: [],
  reducers: {
    addItem(state, action) {
      if (state.find((item) => item._id === action.payload._id)) {
        return state.map((item) => {
          if (item._id === action.payload._id)
            return { ...item, Quanity: +item.Quanity + +action.payload.Quanity };
          return item;
        });
      }
    
      return [...state, action.payload];
    },
    removeItem(state, action) {
      return state.filter((item) => item._id !== action.payload);
    },
    reset(state) {
      return [];
    },
  }
  ,
});

export const billItemActions = billItemsSlice.actions;

export default billItemsSlice.reducer;
