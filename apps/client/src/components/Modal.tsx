import React from 'react'

import { Movie } from '@cine-stack/shared/src'
import CloseIcon from '@mui/icons-material/Close'
import LanguageIcon from '@mui/icons-material/Language'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { Modal, Typography, Fade } from '@mui/material'

import { Poster } from './Poster'
import { Rating } from './Rating'
import {
  StyledModalPaper,
  ModalHeader,
  CloseButton,
  ModalBody,
  ContentWrapper,
  Description,
  MetadataSection,
  MetadataBox,
  PosterContainer,
} from './styles/ModalStyles'

interface MovieModalProps {
  movie: Movie
  open: boolean
  onClose: () => void
}

export const MovieModal = ({ movie, open, onClose }: MovieModalProps): React.ReactElement => (
  <Modal
    open={open}
    onClose={onClose}
    closeAfterTransition
    aria-labelledby="movie-modal-title"
    aria-describedby="movie-modal-description"
    role="dialog"
  >
    <Fade in={open}>
      <StyledModalPaper elevation={24}>
        <ModalHeader>
          <Typography
            variant="h5"
            component="h2"
            id="movie-modal-title"
          >
            {movie.title}
          </Typography>
          <CloseButton
            onClick={onClose}
            size="small"
            aria-label="Close movie details"
          >
            <CloseIcon />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <PosterContainer>
            <Poster
              path={movie.poster_path}
              title={movie.title}
              variant="modal"
            />
          </PosterContainer>
          <ContentWrapper>
            <Rating
              voteAverage={movie.vote_average}
              releaseDate={movie.release_date}
            />

            <Description
              variant="body1"
              color="text.secondary"
              id="movie-modal-description"
            >
              {movie.overview}
            </Description>

            <MetadataSection>
              <MetadataBox>
                <LanguageIcon sx={{ fontSize: 20 }} />
                <Typography variant="body2">Language: {movie.original_language.toUpperCase()}</Typography>
              </MetadataBox>
              <MetadataBox>
                <TrendingUpIcon sx={{ fontSize: 20 }} />
                <Typography variant="body2">Popularity Score: {Math.round(movie.popularity)}</Typography>
              </MetadataBox>
            </MetadataSection>
          </ContentWrapper>
        </ModalBody>
      </StyledModalPaper>
    </Fade>
  </Modal>
)
