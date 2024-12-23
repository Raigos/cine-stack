import { configureStore } from '@reduxjs/toolkit'
import { genresApi } from '@/services/genres'

export const store = configureStore({
  reducer: {
    [genresApi.reducerPath]: genresApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(genresApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
