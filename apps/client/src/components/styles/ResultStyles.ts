import { Box, styled } from '@mui/material'

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  background: 'none',
  backgroundColor: 'transparent',
  [theme.breakpoints.up('lg')]: {
    minHeight: theme.spacing(96),
  },
})) as typeof Box

export const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  //align on the left side
  marginLeft: theme.spacing(-0.5),

  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
})) as typeof Box
