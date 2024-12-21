import { Box, Container, styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const LayoutWrapper = styled(Box)({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
}) as typeof Box

const Main = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(4),
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
})) as typeof Box

const ContentContainer = styled(Container)({
  height: '100%',
}) as typeof Container

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />

      <Main component="main">
        <ContentContainer maxWidth="lg">
          <Outlet />
        </ContentContainer>
      </Main>

      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
