import { TMDBMovieResponse } from '@cine-stack/shared/src'
import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithConfig } from './baseApi'

interface SearchParams {
  query?: string
  genres?: string[]
}

interface AllPagesResponse extends TMDBMovieResponse {
  allResults: TMDBMovieResponse['results']
}

const buildMovieQuery = (params: SearchParams, page: number) => ({
  url: params.query ? '/movies/search' : '/movies/discover',
  params: {
    ...params,
    page,
    sort_by: 'popularity.desc',
    ...(params.genres?.length ? { genres: params.genres.join(',') } : {}),
  },
})

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: baseQueryWithConfig,
  endpoints: builder => ({
    getAllPages: builder.query<AllPagesResponse, SearchParams>({
      async queryFn(params, _queryApi, _extraOptions, baseQuery) {
        const firstPageResult = await baseQuery(buildMovieQuery(params, 1))

        if (firstPageResult.error) {
          return { error: firstPageResult.error }
        }

        const firstPageData = firstPageResult.data as TMDBMovieResponse
        const totalPages = firstPageData.total_pages

        const pagePromises = Array.from({ length: totalPages - 1 }, (_, i) => baseQuery(buildMovieQuery(params, i + 2)))

        const additionalPagesResults = await Promise.all(pagePromises)

        const allResults = [
          ...firstPageData.results,
          ...additionalPagesResults.filter(result => !result.error).flatMap(result => (result.data as TMDBMovieResponse).results),
        ]

        return {
          data: {
            ...firstPageData,
            allResults,
            results: allResults.slice(0, 20),
          },
        }
      },
    }),
  }),
})

export const { useLazyGetAllPagesQuery } = movieApi
