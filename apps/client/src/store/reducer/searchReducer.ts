import { Genre, Movie, TMDBMovieResponse } from '@cine-stack/shared/src'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { filterMoviesByGenres } from '@/hooks/useFilteredMovies'

const ITEMS_PER_PAGE = 5

interface AllPagesResponse extends TMDBMovieResponse {
  allResults: TMDBMovieResponse['results']
}

interface SearchResults extends TMDBMovieResponse {
  allFilteredResults?: Movie[]
}

interface SearchState {
  hasSearched: boolean
  currentPage: number
  selectedGenres: Genre[]
  allResults: Movie[]
  searchResults: SearchResults | null
}

const initialState: SearchState = {
  hasSearched: false,
  currentPage: 1,
  selectedGenres: [],
  allResults: [],
  searchResults: null,
}

const movieSearchSlice = createSlice({
  name: 'movieSearch',
  initialState,
  reducers: {
    searchCompleted: (state, action: PayloadAction<{ results: AllPagesResponse }>) => {
      const { results } = action.payload

      state.hasSearched = true
      state.currentPage = 1

      state.allResults = results.allResults

      if (state.selectedGenres.length > 0) {
        const filteredResults = filterMoviesByGenres(state.allResults, state.selectedGenres, {
          page: 1,
          pageSize: ITEMS_PER_PAGE,
        }).results

        state.searchResults = {
          ...results,
          allFilteredResults: filteredResults,
          results: filteredResults.slice(0, ITEMS_PER_PAGE),
          page: 1,
          total_pages: Math.ceil(filteredResults.length / ITEMS_PER_PAGE),
          total_results: filteredResults.length,
        }
      } else {
        state.searchResults = {
          ...results,
          results: state.allResults.slice(0, ITEMS_PER_PAGE),
          page: 1,
          total_pages: Math.ceil(state.allResults.length / ITEMS_PER_PAGE),
          total_results: state.allResults.length,
        }
      }
    },

    changePage: (state, action: PayloadAction<number>) => {
      const newPage = action.payload
      const startIndex = (newPage - 1) * ITEMS_PER_PAGE
      const endIndex = startIndex + ITEMS_PER_PAGE

      const resultsToPage = state.searchResults?.allFilteredResults || state.allResults

      state.searchResults = {
        ...state.searchResults!,
        results: resultsToPage.slice(startIndex, endIndex),
        page: newPage,
      }
    },

    changeGenres: (state, action: PayloadAction<Genre[]>) => {
      const newGenres = action.payload
      state.selectedGenres = newGenres
      state.currentPage = 1 // Reset to first page when changing filters

      const filteredResults =
        newGenres.length > 0
          ? filterMoviesByGenres(state.allResults, newGenres, {
              page: 1,
              pageSize: ITEMS_PER_PAGE,
            }).results
          : state.allResults

      state.searchResults = {
        ...state.searchResults!,
        allFilteredResults: filteredResults,
        results: filteredResults.slice(0, ITEMS_PER_PAGE),
        page: 1,
        total_pages: Math.ceil(filteredResults.length / ITEMS_PER_PAGE),
        total_results: filteredResults.length,
      }
    },
  },
})

export const { searchCompleted, changePage, changeGenres } = movieSearchSlice.actions
export default movieSearchSlice.reducer
