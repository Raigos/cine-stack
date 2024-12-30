import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const FallbackContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.text.secondary,
})) as typeof Box

export const LoadingContainer = styled(Box)({
  width: '100%',
  height: '100%',
}) as typeof Box

interface StyledImageProps {
  $isLoading: boolean
}

export const StyledPosterImage = styled('img')<StyledImageProps>(({ $isLoading }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: $isLoading ? 'none' : 'block',
}))
