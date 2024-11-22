import apiService from "../apiService";

export const authApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    loginCoupleByTokenAndId: builder.mutation({
      query: (body) => ({ url: "/couples/login", method: "POST", body }),
      transformResponse: (response) => response,
    }),
    // getting all of the registry products on registry
    getCoupleByTokenAndId: builder.query({
      query: (coupleId) => `/couples/${coupleId}`,
    }),
    updateCoupleData: builder.mutation({
      query: ({ body, coupleId }) => ({
        url: `/couples/${coupleId}`,
        method: "PATCH",
        body,
      }),
    }),
  }),
});
export const {
  useLoginCoupleByTokenAndIdMutation,
  useUpdateCoupleDataMutation,
  useGetCoupleByTokenAndIdQuery,
} = authApi;
