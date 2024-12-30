import { styled } from '@mui/material'
import { Container, Stack } from '@mui/material/'

import { ColorModeSelect } from '@/components'


export const GridContainer = styled(Container)(({ theme }) => ({
  display: 'grid',
  position: 'relative',
  overflow: 'visible',
  gap: theme.spacing(4),
  padding: theme.spacing(2),
  gridTemplateColumns: '1fr',
  '& > *:first-of-type': {
    gridRow: 2,
  },
  '& > *:last-of-type': {
    gridRow: 1,
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '1fr 450px',
    gridAutoFlow: 'row',
    '& > *:first-of-type': {
      gridRow: 'auto',
    },
    '& > *:last-of-type': {
      position: 'sticky',
      alignSelf: 'center',
      top: theme.spacing(10),
      height: 'fit-content',
      gridRow: 'auto',
      margin: theme.spacing(2),
      marginLeft: 0,
    },
  },
}))

export const MainStack = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
  marginTop: 'max(80px - var(--template-frame-height, 0px), 0px)',
  minHeight: '100%',

  '&::before': {
    content: '""',
    display: 'block',
    position: 'fixed',
    zIndex: -1,
    inset: 0,
    backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...(theme.palette.mode === 'dark' && {
      backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}))

export const StyledColorModeSelect = styled(ColorModeSelect)({
  position: 'fixed',
  top: '1rem',
  right: '1rem',
})
