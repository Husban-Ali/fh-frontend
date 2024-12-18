import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ReduxApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fand-h.vercel.app/api/auth",
  }),
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: (token) => ({
        url: "/admin/orders",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetOrdersQuery } = ReduxApi;
