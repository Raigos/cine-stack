import React from 'react'
import { Suspense, useState } from 'react'

import { Movie } from '@cine-stack/shared/src'
import { Typography } from '@mui/material'

import { MovieModal } from './Modal'
import { Poster } from './Poster'
import { Rating } from './Rating'
import { StyledCard, MainContent, PosterContainer, MovieInfo } from './styles/CardStyles'

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps): React.ReactElement {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledCard
        onClick={() => setOpen(true)}
        variant="outlined"
      >
        <MainContent>
          <PosterContainer>
            <Poster
              path={movie.poster_path}
              title={movie.title}
              variant="card"
            />
          </PosterContainer>
          <MovieInfo>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700 }}
            >
              {movie.title}
            </Typography>
            <Rating
              voteAverage={movie.vote_average}
              releaseDate={movie.release_date}
            />
          </MovieInfo>
        </MainContent>
      </StyledCard>

      <Suspense fallback={null}>
        {open && (
          <MovieModal
            movie={movie}
            open={open}
            onClose={() => setOpen(false)}
          />
        )}
      </Suspense>
    </>
  )
}
