import React from 'react'

import { Genre, TMDBMovieResponse } from '@cine-stack/shared/src'
import { Typography, Pagination, Stack } from '@mui/material'

import { MovieCard } from './Card'
import { EmptyState } from './EmptyState'
import { Logo } from './Logo'
import { CardContainer, LogoContainer } from './styles/Result'

interface MovieResultsProps {
  onPageChange: (page: number) => void
  results: TMDBMovieResponse | null
  selectedGenres: Genre[]
}

const DISPLAY_PER_PAGE = 5

export function Results({ results, onPageChange, selectedGenres }: MovieResultsProps) {
  const handlePageChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    onPageChange(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!results || results.results.length === 0) {
    return <EmptyState />
  }

  const displayedMovies = results.results.slice(0, DISPLAY_PER_PAGE)
    
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
        Found {results.total_results} {selectedGenres.length > 0 ? 'matching ' : ''}movies
      </Typography>

      <Stack spacing={2}>
        {displayedMovies.map(movie => (
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
