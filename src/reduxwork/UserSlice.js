import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserData: {},
  isRegister: false,
  isLogin: false,
};

const UserSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.UserData = action.payload;
    },

    register: (state, action) => {
      state.isRegister = true;
      state.UserData = action.payload;
    },

    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, register, logout } = UserSlice.actions;
export default UserSlice.reducer;
