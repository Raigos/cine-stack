import React from 'react'

import { Genre, Movie, TMDBMovieResponse } from '@cine-stack/shared/src'
import { Typography, Pagination, Stack } from '@mui/material'

import { MovieCard } from './Card'
import { EmptyState } from './EmptyState'
import { Logo } from './Logo'
import { CardContainer, LogoContainer } from './styles/ResultStyles'

interface MovieResultsProps {
  onPageChange: (page: number) => void
  results: (TMDBMovieResponse & { allFilteredResults?: Movie[] }) | null
  selectedGenres: Genre[]
}

export function Results({ results, onPageChange, selectedGenres }: MovieResultsProps): React.ReactElement {
  const handlePageChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    onPageChange(newPage)
  }

  if (!results || results.results.length === 0) {
    return <EmptyState />
  }

  const totalCount = selectedGenres.length > 0 && results.allFilteredResults ? results.allFilteredResults.length : results.total_results

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
        Found {totalCount} {selectedGenres.length > 0 ? 'matching ' : ''}movies
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
