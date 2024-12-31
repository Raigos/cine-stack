import { Select, MenuItem, SelectProps } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

type ColorMode = 'system' | 'light' | 'dark'

export function ColorModeSelect(props: SelectProps) {
  const { mode, setMode } = useColorScheme()

  if (!mode) return null

  return (
    <Select
      value={mode}
      onChange={event => setMode(event.target.value as ColorMode)}
      {...props}
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  )
}
