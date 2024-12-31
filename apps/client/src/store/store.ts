import { configureStore } from '@reduxjs/toolkit'

import { genresApi } from '@/services/genres'
import { movieApi } from '@/services/movie'
import movieSearchReducer from '@/store/reducer/searchReducer'

export const store = configureStore({
  reducer: {
    [genresApi.reducerPath]: genresApi.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
    movieSearch: movieSearchReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(genresApi.middleware).concat(movieApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
