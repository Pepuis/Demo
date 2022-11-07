import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      // tra ve thong tin nguoi dung
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.error = true;
      state.login.isFetching = false;
    },
  },
});

export const { loginStart, loginFailed, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
