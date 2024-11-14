import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer, { counterSlice } from "./slices/counter/counter";
import baseApi from "./services/api";

const reduxStore = configureStore({
  reducer: {
    [counterSlice.name]: counterReducer,

    // ----------------
    // SERVICES
    // ----------------
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(reduxStore.dispatch);

export default reduxStore;
