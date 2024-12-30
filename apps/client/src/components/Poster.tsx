import React, { useState } from 'react'

import { Typography, Skeleton } from '@mui/material'

import { FallbackContainer, LoadingContainer, StyledPosterImage } from './styles/PosterStyles'

interface MoviePosterProps {
  path: string | null
  title: string
  variant?: 'card' | 'modal'
}

const TMDB_IMAGE_SIZES = {
  card: 'w200',
  modal: 'w500',
} as const

export const Poster = ({ path, title, variant = 'card' }: MoviePosterProps): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  if (!path || error) {
    return (
      <FallbackContainer>
        <Typography variant="body2">No poster available</Typography>
      </FallbackContainer>
    )
  }

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
          />
        </LoadingContainer>
      )}
      <StyledPosterImage
        src={`https://image.tmdb.org/t/p/${TMDB_IMAGE_SIZES[variant]}${path}`}
        alt={`${title} poster`}
        $isLoading={isLoading}
        onLoad={() => setIsLoading(false)}
        onError={() => setError(true)}
      />
    </>
  )
}
