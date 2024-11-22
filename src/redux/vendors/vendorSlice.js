import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPublicVendors: null,
  allPublicServices: null,
  myBookedServices: null,
};

export const vendorSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    setAllPublicVendors: (state, action) => {
      state.allPublicVendors = action.payload;
    },
    setAllPublicServices: (state, action) => {
      state.allPublicServices = action.payload;
    },
    setMyBookedServices: (state, action) => {
      state.myBookedServices = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAllPublicVendors,
  setAllPublicServices,
  setMyBookedServices,
} = vendorSlice.actions;

export default vendorSlice.reducer;
