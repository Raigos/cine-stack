import { Box, styled } from '@mui/material'

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  background: 'none',
  backgroundColor: 'transparent',
}))

export const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  marginBottom: theme.spacing(2),
  //align on the left side
  marginLeft: theme.spacing(-0.5),

  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}))
