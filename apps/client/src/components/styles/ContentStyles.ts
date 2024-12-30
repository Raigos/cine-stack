import { Box, Stack, Link, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ContainerCard = styled(Box)(({ theme }) => ({
  background: 'none',
  backgroundColor: 'transparent',
  border: '0',
  padding: 0,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    minHeight: theme.spacing(96),
  },
})) as typeof Box

export const ContentStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  alignSelf: 'center',
  justifyContent: 'center',
  height: '100%',
  gap: theme.spacing(2),
})) as typeof Stack

export const ItemStack = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  flexDirection: 'row',
})) as typeof Stack

export const StyledEndpointItem = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'flex-start',
  '&::before': {
    content: '"•"',
    marginRight: theme.spacing(1),
  },
})) as typeof Typography

export const StyledDocLink = styled(Link)(() => ({
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
})) as typeof Link

export const EndpointList = styled(Box)(() => ({
  margin: 0,
  padding: 0,
  listStyle: 'none',
})) as typeof Box

export const ItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'medium',
  marginBottom: theme.spacing(1),
})) as typeof Typography

export const ItemDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
})) as typeof Typography
