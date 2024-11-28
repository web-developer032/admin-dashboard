import apiService from "../apiService";
import { setUser } from "./authSlice";

export const authApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getAdminByToken: builder.query({
      query: () => `/admins/loginByToken`,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          // console.error("Error fetching admin data:", error);
        }
      },
    }),

    loginAdmin: builder.mutation({
      query: (body) => ({ url: "/admins/login", method: "POST", body }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          // console.error("Error fetching admin data:", error);
        }
      },
    }),

    updateAdmin: builder.mutation({
      query: ({ body, adminId }) => ({
        url: `/admins/${adminId}`,
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const {
  useGetAdminByTokenQuery,
  useLoginAdminMutation,
  useUpdateAdminMutation,
} = authApi;
