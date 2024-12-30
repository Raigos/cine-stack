import { Card, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledCard = styled(Card)(() => ({
  width: '100%',
  height: '100px',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
})) as typeof Card

export const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  padding: theme.spacing(0),
})) as typeof Box

export const PosterContainer = styled(Box)(({ theme }) => ({
  width: '70px',
  height: '100%',
  backgroundColor: theme.palette.grey[200],
  marginRight: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  flexShrink: 0,
})) as typeof Box

export const MovieInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
}) as typeof Box
