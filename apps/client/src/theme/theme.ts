import { createTheme, ThemeOptions } from '@mui/material/styles'

//Note: Don't forget you wanted to try HSL colors
//maybe add p3 and rec2020 support too
export const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
  },
})

export const darkTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
  },
})
