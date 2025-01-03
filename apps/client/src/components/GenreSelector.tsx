import React from 'react'

import { Genre } from '@cine-stack/shared/src'
import { ArrowDropDown } from '@mui/icons-material'
import { Alert, Chip, CircularProgress, SelectChangeEvent, FormHelperText, OutlinedInput } from '@mui/material'

import { useGetGenresQuery } from '@/services/genres'

import { GenreSelectorContainer, GenreSelect, GenreChipsContainer, GenreMenuItem } from './styles/GenreSelectorStyles'

interface GenreSelectorProps {
  selectedGenres: Genre[]
  onGenreChange: (genres: Genre[]) => void
}

export function GenreSelector({ selectedGenres, onGenreChange }: GenreSelectorProps): React.ReactElement {
  const { data: genres, isLoading, error } = useGetGenresQuery()

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const selectedIds = event.target.value as number[]
    const selectedGenreObjects = genres?.filter(genre => selectedIds.includes(genre.id)) || []
    onGenreChange(selectedGenreObjects)
  }

  const hasError = Boolean(error)
  const genreList = genres || []

  if (error) {
    return <Alert severity="error">Failed to load genres. Please try again later.</Alert>
  }

  return (
    <GenreSelectorContainer error={hasError}>
      <GenreSelect
        multiple
        value={selectedGenres.map(genre => genre.id)}
        onChange={handleChange}
        fullWidth
        IconComponent={ArrowDropDown}
        input={<OutlinedInput />}
        renderValue={() => (
          <GenreChipsContainer>
            {selectedGenres.map(genre => (
              <Chip
                key={genre.id}
                label={genre.name}
                size="small"
              />
            ))}
          </GenreChipsContainer>
        )}
      >
        {isLoading ? (
          <GenreMenuItem
            disabled
            key="loading"
            className="loading"
          >
            <CircularProgress size={20} />
            Loading genres...
          </GenreMenuItem>
        ) : (
          genreList.map(genre => (
            <GenreMenuItem
              key={genre.id}
              value={genre.id}
            >
              {genre.name}
            </GenreMenuItem>
          ))
        )}
      </GenreSelect>
      {error && <FormHelperText>Problem fetching genres!</FormHelperText>}
    </GenreSelectorContainer>
  )
}
