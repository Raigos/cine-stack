export const WRAPPER_PORT = import.meta.env.WRAPPER_PORT || 3000
export const baseUrl = `http://localhost:${WRAPPER_PORT}`

import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseQueryWithConfig = fetchBaseQuery({ baseUrl })
