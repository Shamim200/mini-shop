import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://dummyjson.com";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({
        searchTerm,
        page = 1,
        limit = 10,
        sortBy = "title",
        order = "asc",
      }) => {
        const skip = (page - 1) * limit;
        if (searchTerm) {
          return `/products/search?q=${searchTerm}&limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`;
        } else {
          return `/products?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`;
        }
      },
    }),
    getProudctById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProudctByIdQuery } = productApi;
