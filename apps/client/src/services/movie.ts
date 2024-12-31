import { TMDBMovieResponse } from '@cine-stack/shared/src'
import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithConfig } from './baseApi'

interface SearchParams {
  query?: string
  genres?: string[]
  page?: number
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: baseQueryWithConfig,
  endpoints: builder => ({
    getMovies: builder.query<TMDBMovieResponse, SearchParams>({
      query: ({ query, genres, page = 1 }) => {
        if (query) {
          return {
            url: '/movies/search',
            params: { query, page },
          }
        }

        return {
          url: '/movies/discover',
          params: {
            page,
            sort_by: 'popularity.desc',
            ...(genres?.length ? { genres: genres.join(',') } : {}),
          },
        }
      },
    }),
  }),
})

export const { useLazyGetMoviesQuery } = movieApi
