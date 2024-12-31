import { Genre } from '@cine-stack/shared/src'
import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithConfig } from './baseApi'

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery: baseQueryWithConfig,
  endpoints: builder => ({
    getGenres: builder.query<Genre[], void>({
      query: () => '/genres',
      keepUnusedDataFor: 24 * 3600,
    }),
  }),
})

export const { useGetGenresQuery } = genresApi
