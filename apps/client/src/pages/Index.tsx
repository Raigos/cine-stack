import React, { useRef } from 'react'

import { Genre, Movie, TMDBMovieResponse } from '@cine-stack/shared/src'
import CssBaseline from '@mui/material/CssBaseline'
import { useDispatch, useSelector } from 'react-redux'

import { Content, Results, SearchCard } from '@/components'
import { searchCompleted, changePage, changeGenres } from '@/store/reducer/searchReducer'
import { RootState } from '@/store/store'

import { GridContainer, MainStack, StyledColorModeSelect } from './styles/index'

type ExtendedTMDBResponse = TMDBMovieResponse & {
  allFilteredResults?: Movie[]
  allResults: Movie[]
}

export default function Index(): React.ReactElement {
  const dispatch = useDispatch()
  const { hasSearched, selectedGenres, searchResults } = useSelector(({ movieSearch }: RootState) => movieSearch)
  const resultsRef = useRef<HTMLDivElement>(null)

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handlers = {
    onSearchUpdate: (results: ExtendedTMDBResponse) => {
      dispatch(searchCompleted({ results }))
      setTimeout(scrollToResults, 100)
    },
    onPageChange: (page: number) => dispatch(changePage(page)),
    onGenreChange: (genres: Genre[]) => dispatch(changeGenres(genres)),
  }

  return (
    <>
      <CssBaseline enableColorScheme />
      <StyledColorModeSelect />
      <MainStack direction="column">
        <GridContainer
          maxWidth="lg"
          ref={resultsRef}
        >
          {hasSearched ? (
            <Results
              results={searchResults}
              selectedGenres={selectedGenres}
              onPageChange={handlers.onPageChange}
            />
          ) : (
            <Content />
          )}
          <SearchCard
            selectedGenres={selectedGenres}
            onSearchUpdate={handlers.onSearchUpdate}
            onGenreChange={handlers.onGenreChange}
          />
        </GridContainer>
      </MainStack>
    </>
  )
}
