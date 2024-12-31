import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const EmptyStateContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('lg')]: {
        minHeight: 768
    }
})) as typeof Box

export const EmptyStateTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    textAlign: 'center',
}))

export const EmptyStateMessage = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    textAlign: 'center',
}))

export const EmptyStateHint = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))