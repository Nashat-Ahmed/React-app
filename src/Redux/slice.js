import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: {},
    isAuth: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logoutAction: (state, action) => {
      state.isAuth = false;
      state.user = {};
    },
  },
});

export const { login, logoutAction } = loginSlice.actions;
export default loginSlice.reducer;
