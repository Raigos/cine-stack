import React, { useState } from 'react'

import { FormControl, FormLabel, TextField } from '@mui/material'
import Box from '@mui/material/Box'

interface SearchBarProps {
  onValueChange: (value: string) => void
  placeholder?: string
}

export const SearchBar = ({ onValueChange, placeholder }: SearchBarProps): React.ReactElement => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setSearchValue(newValue)
    onValueChange(newValue)
  }

  return (
    <FormControl fullWidth>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <FormLabel htmlFor="search-input">Search for</FormLabel>
      </Box>
      <TextField
        type="search"
        name="search"
        placeholder={placeholder}
        autoFocus
        required
        value={searchValue}
        onChange={handleSearchChange}
        fullWidth
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            height: '42px',
          },
        }}
      />
    </FormControl>
  )
}
