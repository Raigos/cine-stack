import { ReactNode, useMemo } from 'react'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { lightTheme, darkTheme } from './theme'
import { useTheme } from '@/hooks/useTheme'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useTheme()

  const currentTheme = useMemo(() => (theme === 'light' ? lightTheme : darkTheme), [theme])

  return (
    <MUIThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}
