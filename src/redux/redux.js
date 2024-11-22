import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import service from "./apiService";
import authReducer, { authSlice } from "./auth/authSlice";

const reduxStore = configureStore({
  reducer: {
    [authSlice.name]: authReducer,

    // ----------------
    // SERVICES
    // ----------------
    [service.reducerPath]: service.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(service.middleware),
});

setupListeners(reduxStore.dispatch);

export default reduxStore;
