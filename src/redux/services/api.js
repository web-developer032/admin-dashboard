// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_EJUNO_BASE_URL_API,
  credentials: "include", // Include credentials (cookies) in all requests
  prepareHeaders: (headers) => {
    const authToken = localStorage.getItem("authToken");
    // headers.set(
    //   "X-Shopify-Access-Token",
    //   import.meta.env.VITE_SHOPIFY_STORE_ID,
    // );
    if (authToken) {
      headers.set("Authorization", `Bearer ${authToken}`);
    } else {
      headers.delete("Authorization");
    }
    return headers;
  },
});

// Define a service using a base URL and expected endpoints
const baseApi = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Pokemon"],
  endpoints: () => ({}),
});

export default baseApi;
