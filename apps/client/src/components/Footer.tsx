import React from 'react'

import { Typography } from '@mui/material'

import tmdbLogo from '@/assets/blue_short.svg'

import { StyledFooterContainer, StyledFooterContent, StyledTMDBLink, StyledTMDBSection, StyledTMDBLogo } from './styles/FooterStyles'

export const Footer = (): React.ReactElement => {
  return (
    <StyledFooterContainer
      variant="outlined"
      component="footer"
    >
      <StyledFooterContent maxWidth="lg">
        <StyledTMDBSection>
          <StyledTMDBLink
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledTMDBLogo
              src={tmdbLogo}
              alt="TMDB Logo"
            />
          </StyledTMDBLink>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            This product uses the TMDB API but is not endorsed or certified by TMDB
          </Typography>
        </StyledTMDBSection>
      </StyledFooterContent>
    </StyledFooterContainer>
  )
}
