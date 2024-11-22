import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "XD",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, deleteUser } = authSlice.actions;

export default authSlice.reducer;
