import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GenreNames } from '@cine-stack/shared/src'

const WRAPPER_PORT = import.meta.env.WRAPPER_PORT || 3000

const baseUrl = `http://localhost:${WRAPPER_PORT}`

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getGenres: builder.query<GenreNames[], void>({
      query: () => '/genres',
    }),
  }),
})

export const { useGetGenresQuery } = genresApi
