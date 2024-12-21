import { AppBar, Stack, IconButton, Toolbar, Typography, Container, styled } from '@mui/material'
import { DarkMode as DarkIcon, LightMode as LightIcon } from '@mui/icons-material'
import MovieFilterIcon from '@mui/icons-material/MovieFilter'
import { Link } from 'react-router-dom'
import { useTheme } from '@/hooks/useTheme'

const StyledAppBar = styled(AppBar)({
  position: 'fixed',
}) as typeof AppBar

const ToolbarContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 0,
}) as typeof Container

const LogoLink = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  textDecoration: 'none',
  color: 'inherit',
})) as typeof Stack

export const Header = () => {
  const { theme: currentTheme, toggleTheme } = useTheme()

  return (
    <StyledAppBar>
      <Toolbar>
        <ToolbarContainer maxWidth="lg">
          <LogoLink
            component={Link}
            to="/"
          >
            <MovieFilterIcon sx={{ marginBottom: 0.375 }} />
            <Typography variant="h6">MovieLens</Typography>
          </LogoLink>

          <IconButton
            onClick={toggleTheme}
            color="inherit"
            size="large"
          >
            {currentTheme === 'dark' ? <LightIcon /> : <DarkIcon />}
          </IconButton>
        </ToolbarContainer>
      </Toolbar>
    </StyledAppBar>
  )
}
