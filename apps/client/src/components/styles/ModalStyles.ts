import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const MetadataBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.text.secondary,
})) as typeof Box

export const ModalBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  padding: theme.spacing(3),
})) as typeof Box

export const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '600px',
  maxWidth: '90vw',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[24],
  outline: 'none',
})) as typeof Box

export const ModalHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: theme.spacing(3),
  paddingBottom: 0,
})) as typeof Box

export const PosterContainer = styled(Box)(({ theme }) => ({
  width: '200px',
  height: '300px',
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  flexShrink: 0,
})) as typeof Box
