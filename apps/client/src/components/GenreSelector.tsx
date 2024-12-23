import { useGetGenresQuery } from '@/services/genres'
import { FormControl, InputLabel, Select, MenuItem, Box, Chip, OutlinedInput, SelectChangeEvent, FormHelperText } from '@mui/material'
import { useState } from 'react'
import { GenreNames } from '@cine-stack/shared/src'
import { CircularProgress } from '@mui/material'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

export function GenreSelector() {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([])
    const { data: genres, isLoading, error } = useGetGenresQuery()

    const handleChange = (event: SelectChangeEvent<typeof selectedGenres>) => {
        const {
            target: { value },
        } = event
        setSelectedGenres(typeof value === 'string' ? value.split(',') : value)
    }

    const hasError = Boolean(error)
    const genreList = Array.isArray(genres) ? genres : []

    return (
        <FormControl
            sx={{ width: 300 }}
            error={hasError}
        >
            <InputLabel id="genre-multiple-chip-label">Genres</InputLabel>
            <Select
                labelId="genre-multiple-chip-label"
                id="genre-multiple-chip"
                multiple
                value={selectedGenres}
                onChange={handleChange}
                input={
                    <OutlinedInput
                        id="select-multiple-chip"
                        label="Genres"
                    />
                }
                renderValue={selected => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map(value => (
                            <Chip
                                key={value}
                                label={value}
                            />
                        ))}
                    </Box>
                )}
                MenuProps={MenuProps}
            >
                {isLoading ? (
                    <MenuItem disabled>
                        <CircularProgress
                            size={20}
                            sx={{ mr: 2 }}
                        />
                        Loading genres...
                    </MenuItem>
                ) : (
                    genreList.map((genre: GenreNames, index: number) => (
                        <MenuItem
                            key={`genre-${genre}-${index}`}
                            value={genre}
                        >
                            {genre}
                        </MenuItem>
                    ))
                )}
            </Select>
            {error && <FormHelperText>Problem fetching genres!</FormHelperText>}
        </FormControl>
    )
}