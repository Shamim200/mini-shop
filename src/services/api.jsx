import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://dummyjson.com";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (searchTerm) => {
        if (searchTerm) {
          return `/products/search?q=${searchTerm}`;
        }
        return `/products`;
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
