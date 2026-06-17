import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductResponse, ProductType } from "../lib/ecommerce/product";

export const ecommerceApi = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    //     getAllProduct: builder.query<ProductResponse,{page:number, size:number}>({
    //         query: ({page=0, size=12}) => `/products?page=${page}&
    //         size=${size}`
    //     }),
    //     //
    //     getSingleProduct: builder.query<ProductType, string>({
    //         query: (id) => `/products/${id}`
    //     })
    getAllProduct: builder.query<ProductResponse, void>({
      query: () => `/products`,
    }),

    getSingleProduct: builder.query<ProductType, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetAllProductQuery, useGetSingleProductQuery } = ecommerceApi;
