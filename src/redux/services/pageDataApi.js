import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pageDataApi = createApi({
    reducerPath: "pageDataApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://raw.githubusercontent.com/javialcocer/test-json/main/"
    }),
    endpoints: (builder) => {
        return {
            getPageData: builder.query({
                query: () => "/data.json"
            })
        }
    }
})

export const {useGetPageDataQuery} = pageDataApi;