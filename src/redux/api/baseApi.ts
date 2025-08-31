import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://b5-a3-library-management-system.vercel.app/api",
  }),
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    getBook: builder.query({
      query: (query) =>
        `/books?filter=${query.filter}&skip=${query.skip}&limit=${query.limit}`,
      providesTags: ["Book"],
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["Book"],
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: `/books`,
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["Book"],
    }),
    updateBook: builder.mutation({
      query: (bookData) => ({
        url: `/books/${bookData._id}`,
        method: "PUT",
        body: bookData,
      }),
      invalidatesTags: ["Book"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),
    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["Book"],
    }),
    getBorrowedBooksSummary: builder.query({
      query: () => `/borrow`,
      providesTags: ["Book"],
    }),
  }),
});

export const {
  useGetBookQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetBookByIdQuery,
  useBorrowBookMutation,
  useGetBorrowedBooksSummaryQuery,
} = baseApi;
