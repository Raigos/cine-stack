import StarIcon from '@mui/icons-material/Star'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const RatingWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  color: theme.palette.text.secondary,
}))

export const StyledStarIcon = styled(StarIcon)(({ theme }) => ({
  fontSize: 18,
  display: 'flex',
  alignSelf: 'center',
  marginTop: theme.spacing(-0.5),
}))

export const RatingText = styled(Typography)({
  fontWeight: 500,
})

export const Dot = styled(Typography)(({ theme }) => ({
  userSelect: 'none',
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}))

export const YearText = styled(Typography)()
