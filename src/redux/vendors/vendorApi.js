import apiService from "../apiService";

export const vendorApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    // getting the list of all public vendors
    getAllPublicVendors: builder.query({
      query: () => "/vendors",
    }),
    getAllPublicServices: builder.query({
      query: () => "/services",
    }),
    getMyBookedServices: builder.query({
      query: (coupleId) => `/services/couple/${coupleId}`,
    }),

    overrideExisting: true,
  }),
});
export const {
  useGetAllPublicVendorsQuery,
  useGetAllPublicServicesQuery,
  useGetMyBookedServicesQuery,
} = vendorApi;
