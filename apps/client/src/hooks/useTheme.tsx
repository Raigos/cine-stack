import { useState, useEffect } from 'react'
import { getInitialTheme, setTheme, subscribe, Theme, toggleTheme } from '../theme/themeManager.ts'

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme())

  useEffect(() => {
    return subscribe(setThemeState)
  }, [])

  return {
    theme,
    toggleTheme,
    setTheme: (newTheme: Theme) => setTheme(newTheme),
  }
}
