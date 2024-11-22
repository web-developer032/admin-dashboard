import apiService from "../apiService";

export const vendorApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    // getting the list of all public vendors
    getAllPublicVendors: builder.query({
      query: () => "/vendors",
      transformResponse: (response) => response,
    }),
    getAllPublicServices: builder.query({
      query: () => "/services",
      transformResponse: (response) => response,
    }),
    getMyBookedServices: builder.query({
      query: (coupleId) => `/services/couple/${coupleId}`,
      transformResponse: (response) => response,
    }),

    overrideExisting: true,
  }),
});
export const {
  useGetAllPublicVendorsQuery,
  useGetAllPublicServicesQuery,
  useGetMyBookedServicesQuery,
} = vendorApi;
