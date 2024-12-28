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
    getUsers: builder.query({
      query: (token) => ({
        url: "/admin/users",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getTickets: builder.query({
      query: () => ({
        url: "/admin/tickets",
        method: "GET"
      }),
    }),
  }),
});

export const { useGetOrdersQuery,useGetUsersQuery,useGetTicketsQuery} = ReduxApi;
