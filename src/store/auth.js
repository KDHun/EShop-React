import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {Token:null,isLoggedIn:false,EmployeeId:null},
  reducers: {
    login(state, action) {
      console.log(action.payload);
      return {Token:action.payload.Token,isLoggedIn:true,EmployeeId:action.payload.EmployeeId};
    },
    logout() {
      return {Token:null,isLoggedIn:false,EmployeeId:null};
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;