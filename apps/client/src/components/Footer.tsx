import { Box, Typography, Button, styled, Link as MuiLink, Container } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { emailBody, emailSubject } from '@/constants/email'
import tmdbLogo from '@/assets/blue_short.svg'

const FooterContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: 'background.paper',
  borderTop: '1px solid',
  borderColor: 'divider',
  padding: theme.spacing(2),
})) as typeof Box

const FooterContent = styled(Container)(({ theme }) => ({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
})) as typeof Container

const AuthorSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
})) as typeof Box

const TMDBSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
})) as typeof Box

const TMDBLogo = styled('img')(({ theme }) => ({
  height: theme.spacing(1.5),
  width: 'auto',
}))

const StyledButton = styled(Button)({
  textTransform: 'none',
  padding: 0,
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
  },
}) as typeof Button

const StyledHeart = styled(FavoriteIcon)(({ theme }) => ({
  width: theme.spacing(2),
  height: theme.spacing(2),
  color: '#ef4444',
  animation: 'heartbeat 1.5s ease-in-out infinite',
  '@keyframes heartbeat': {
    '0%': { transform: 'scale(1)' },
    '14%': { transform: 'scale(1.3)' },
    '28%': { transform: 'scale(1)' },
    '42%': { transform: 'scale(1.3)' },
    '70%': { transform: 'scale(1)' },
  },
}))

export const Footer = () => {
  const handleClick = () => {
    window.open('https://linkedin.com/in/raigo-tuulik', '_blank')
    window.location.href = `mailto:raigo.tuulik@gmail.com?subject=${emailSubject}&body=${emailBody}`
  }

  return (
    <FooterContainer component="footer">
      <FooterContent maxWidth="lg">
        <TMDBSection>
          <MuiLink
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TMDBLogo
              src={tmdbLogo}
              alt="TMDB Logo"
            />
          </MuiLink>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            This product uses the TMDB API but is not endorsed or certified by TMDB
          </Typography>
        </TMDBSection>
        <AuthorSection>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Made with
          </Typography>
          <StyledHeart />
          <Typography
            variant="body2"
            color="text.secondary"
          >
            by
          </Typography>
          <StyledButton onClick={handleClick}>
            <Typography
              variant="body2"
              color="primary"
            >
              Raigo Tuulik
            </Typography>
          </StyledButton>
        </AuthorSection>
      </FooterContent>
    </FooterContainer>
  )
}
