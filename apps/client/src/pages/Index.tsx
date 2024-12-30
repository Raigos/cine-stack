import { Genre, TMDBMovieResponse } from '@cine-stack/shared/src'
import CssBaseline from '@mui/material/CssBaseline'
import { useDispatch, useSelector } from 'react-redux'

import { Content, Results, SearchCard } from '@/components'
import { searchCompleted, changePage, changeGenres, setShouldSearch } from '@/services/searchReducer'
import { RootState } from '@/store/store'

import { GridContainer, MainStack, StyledColorModeSelect } from './styles/index'


export default function Index() {
  const dispatch = useDispatch()
  const { hasSearched, currentPage, selectedGenres, searchResults, shouldSearch } = useSelector((state: RootState) => state.movieSearch)

  const handleSearchComplete = (results: TMDBMovieResponse, page: number) => {
    dispatch(searchCompleted({ results, page }))
  }

  const handlePageChange = (newPage: number) => {
    dispatch(changePage(newPage))
  }

  const handleGenreChange = (newGenres: Genre[]) => {
    dispatch(changeGenres(newGenres))
  }

  return (
    <>
      <CssBaseline enableColorScheme />
      <StyledColorModeSelect />
      <MainStack direction="column">
        <GridContainer maxWidth="lg">
          {hasSearched ? (
            <Results
              onPageChange={handlePageChange}
              results={searchResults}
              selectedGenres={selectedGenres}
            />
          ) : (
            <Content />
          )}
          <SearchCard
            onSearchComplete={handleSearchComplete}
            currentPage={currentPage}
            shouldSearch={shouldSearch}
            setShouldSearch={value => dispatch(setShouldSearch(value))}
            selectedGenres={selectedGenres}
            onGenreChange={handleGenreChange}
          />
        </GridContainer>
      </MainStack>
    </>
  )
}
