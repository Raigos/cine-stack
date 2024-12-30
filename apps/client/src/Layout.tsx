import { Box, Container, styled } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Footer } from '@/components'


const LayoutWrapper = styled(Box)({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
}) as typeof Box

const Layout = () => {
  return (
    <LayoutWrapper>
      <Container
        component="main"
        maxWidth="lg"
      >
        <Outlet />
      </Container>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
