export type Theme = 'light' | 'dark'
type ThemeListener = (theme: Theme) => void

const listeners: ThemeListener[] = []

function isValidTheme(theme: string | null): theme is Theme {
  return theme === 'light' || theme === 'dark'
}

function notifyListeners(theme: Theme): void {
  listeners.forEach(listener => listener(theme))
}

function initSystemThemeListener(): void {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleChange = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light', false)
    }
  }

  mediaQuery.addEventListener('change', handleChange)
}

export function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem('theme')
  if (isValidTheme(savedTheme)) {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function setTheme(theme: Theme, saveToStorage = true): void {
  if (saveToStorage) {
    localStorage.setItem('theme', theme)
  }

  document.documentElement.setAttribute('data-theme', theme)
  notifyListeners(theme)
}

export function toggleTheme(): void {
  const currentTheme = document.documentElement.getAttribute('data-theme') as Theme
  const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark'
  setTheme(newTheme)
}

export function subscribe(listener: ThemeListener): () => void {
  listeners.push(listener)
  return () => {
    const index = listeners.indexOf(listener)
    if (index > -1) {
      listeners.splice(index, 1)
    }
  }
}

const initialTheme = getInitialTheme()
setTheme(initialTheme)
initSystemThemeListener()
