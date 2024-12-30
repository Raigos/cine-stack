import React from 'react'

import { RatingWrapper, StyledStarIcon, RatingText, Dot, YearText } from './styles/RatingStyles'

interface RatingProps {
  voteAverage: number
  releaseDate: string
}

export const Rating = ({ voteAverage, releaseDate }: RatingProps): React.ReactElement => {
  const rating = voteAverage === 0 ? 'N/A' : voteAverage.toFixed(1)
  const year = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A'

  return (
    <RatingWrapper>
      <StyledStarIcon />
      <RatingText>{rating}</RatingText>
      <Dot>•</Dot>
      <YearText>{year}</YearText>
    </RatingWrapper>
  )
}
