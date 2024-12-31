import React from 'react'

import { Genre, TMDBMovieResponse } from '@cine-stack/shared/src'
import { Typography, Pagination, Stack } from '@mui/material'

import { filterMoviesByGenres } from '@/hooks/useFilteredMovies'

import { MovieCard } from './Card'
import { EmptyState } from './EmptyState'
import { Logo } from './Logo'
import { CardContainer, LogoContainer } from './styles/ResultStyles'

interface MovieResultsProps {
  onPageChange: (page: number) => void
  results: TMDBMovieResponse | null
  selectedGenres: Genre[]
}

export function Results({ results, onPageChange, selectedGenres }: MovieResultsProps): React.ReactElement {
  const handlePageChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    onPageChange(newPage)
  }

  if (!results || results.results.length === 0) {
    return <EmptyState />
  }

  let filteredCount = results.total_results
  if (selectedGenres.length > 0) {
    filteredCount = filterMoviesByGenres(results.results, selectedGenres).totalCount
  }

  return (
    <CardContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Typography
        component="h2"
        variant="h4"
        sx={{ lineHeight: 1 }}
      >
        Found {filteredCount} {selectedGenres.length > 0 ? 'matching ' : ''}movies
      </Typography>

      <Stack spacing={2}>
        {results.results.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </Stack>

      {results.total_pages > 1 && (
        <Stack
          spacing={2}
          alignItems="center"
          sx={{ mt: 1.25 }}
        >
          <Pagination
            count={results.total_pages}
            page={results.page}
            onChange={handlePageChange}
            color="primary"
            size="small"
            aria-label="Movie results navigation"
          />
        </Stack>
      )}
    </CardContainer>
  )
}
