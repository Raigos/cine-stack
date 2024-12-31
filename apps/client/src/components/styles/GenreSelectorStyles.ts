import { FormControl, Select, MenuItem, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const GenreSelectorContainer = styled(FormControl)(() => ({
  minWidth: 200,
}))

export const GenreSelect = styled(Select)(() => ({
  minHeight: '42px',
  height: 'auto',
}))

export const GenreChipsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),
}))

export const GenreMenuItem = styled(MenuItem)(({ theme }) => ({
  '&.loading': {
    display: 'flex',
    alignItems: 'center',
    '& .MuiCircularProgress-root': {
      marginRight: theme.spacing(2),
    },
  },
}))
