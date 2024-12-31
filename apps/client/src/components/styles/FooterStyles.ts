import { Box, Card, Container, Link } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledTMDBLink = styled(Link)(() => ({
  '&:before': {
    display: 'none',
  },
})) as typeof Link

export const StyledFooterContainer = styled(Card)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  marginTop: 'auto',
  borderRadius: 0,
})) as typeof Card

export const StyledFooterContent = styled(Container)(({ theme }) => ({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
})) as typeof Container

export const StyledTMDBSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    textAlign: 'center',
  },
})) as typeof Box

export const StyledTMDBLogo = styled('img')(({ theme }) => ({
  height: theme.spacing(1.5),
  width: 'auto',
}))
