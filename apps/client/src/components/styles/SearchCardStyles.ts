import { Box, Card as MuiCard, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledCard = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  maxWidth: '450px',
  margin: '0 auto',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow: 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
})) as typeof MuiCard

export const StyledAuthorSection = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  textTransform: 'none',
  padding: 0,
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
  },
})) as typeof Button

export const StyledForm = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 16,
}) as typeof Box

export const StyledLogoContainer = styled(Box)({
  display: 'flex',
}) as typeof Box

export const StyledSearchButton = styled(Button)({
  marginTop: 16,
}) as typeof Button

export const StyledHeading = styled(Typography)({
  lineHeight: 1,
}) as typeof Typography
