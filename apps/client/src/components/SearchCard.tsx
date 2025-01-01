import React, { useState } from 'react'

import { Genre, Movie, TMDBMovieResponse } from '@cine-stack/shared/src'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Divider, FormControl, FormLabel, Typography, CircularProgress } from '@mui/material'

import { GenreSelector } from '@/components/GenreSelector'
import { Logo } from '@/components/Logo'
import { SearchBar } from '@/components/SearchBar'
import { emailBody, emailSubject } from '@/constants/email'
import { useLazyGetAllPagesQuery } from '@/services/movie'

import {
  StyledCard,
  StyledAuthorSection,
  StyledForm,
  StyledLogoContainer,
  StyledSearchButton,
  StyledHeading,
} from './styles/SearchCardStyles'

interface SearchCardProps {
  onSearchUpdate: (results: TMDBMovieResponse & { allResults: Movie[] }) => void
  selectedGenres: Genre[]
  onGenreChange: (genres: Genre[]) => void
}

export function SearchCard({ onSearchUpdate, selectedGenres, onGenreChange }: SearchCardProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [trigger, { isLoading }] = useLazyGetAllPagesQuery()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const genreIds = selectedGenres.length > 0 ? selectedGenres.map(g => g.id.toString()) : undefined

    const { data } =
      (await trigger({
        query: searchTerm,
        genres: genreIds,
      })) || {}

    if (data) onSearchUpdate(data)
  }

  const openContact = () => {
    window.open('https://linkedin.com/in/raigo-tuulik', '_blank')
    window.location.href = `mailto:raigo.tuulik@gmail.com?subject=${emailSubject}&body=${emailBody}`
  }

  return (
    <StyledCard variant="outlined">
      <StyledLogoContainer sx={{ display: { xs: 'flex', lg: 'none' } }}>
        <Logo />
      </StyledLogoContainer>

      <StyledHeading
        component="h1"
        variant="h4"
      >
        Search for movies
      </StyledHeading>

      <StyledForm
        component="form"
        onSubmit={handleSubmit}
      >
        <FormControl>
          <SearchBar
            onValueChange={setSearchTerm}
            placeholder="The matrix.."
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="genre-select">From Genre(s)</FormLabel>
          <GenreSelector
            selectedGenres={selectedGenres}
            onGenreChange={onGenreChange}
          />
        </FormControl>

        <StyledSearchButton
          type="submit"
          fullWidth
          variant="contained"
        >
          {isLoading ? (
            <>
              <CircularProgress
                size={20}
                sx={{ mr: 1 }}
              />
              Searching...
            </>
          ) : (
            'Search'
          )}
        </StyledSearchButton>
      </StyledForm>

      <Divider>Website by</Divider>
      <StyledAuthorSection onClick={openContact}>
        <Typography
          variant="body2"
          color="primary"
        >
          Raigo Tuulik
          <OpenInNewIcon sx={{ fontSize: 16, marginLeft: 0.5, marginBottom: '-2px' }} />
        </Typography>
      </StyledAuthorSection>
    </StyledCard>
  )
}
