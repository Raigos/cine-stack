import { Box, Paper, IconButton, Typography } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'

import { gray } from '@/theme/themePrimitives'

export const StyledModalPaper = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '600px',
  maxWidth: '90vw',
  borderRadius: theme.shape.borderRadius,
  outline: 'none',
  background: alpha(gray[900], 0.9),
})) as typeof Paper

export const ModalHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: theme.spacing(3),
  paddingBottom: 0,
})) as typeof Box

export const CloseButton = styled(IconButton)(({ theme }) => ({
  border: 0,
  marginRight: -theme.spacing(1),
  marginTop: -theme.spacing(1),
})) as typeof IconButton

export const ModalBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  padding: theme.spacing(3),
})) as typeof Box

export const ContentWrapper = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}) as typeof Box

export const Description = styled(Typography)(({ theme }) => ({
  marginBottom: 'auto',
  marginTop: theme.spacing(3),
})) as typeof Typography

export const MetadataSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(3),
})) as typeof Box

export const MetadataBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.text.secondary,
})) as typeof Box

export const PosterContainer = styled(Box)(({ theme }) => ({
  width: '200px',
  height: '300px',
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  flexShrink: 0,
})) as typeof Box
