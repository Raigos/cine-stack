import React from 'react'

import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import { Typography } from '@mui/material'

export const Logo = (): React.ReactElement => {
  return (
    <>
      <LocalMoviesIcon
        fill={'#4876EE'}
        sx={{
          marginBottom: 0.375,
        }}
      />
      <Typography
        variant="h6"
        color={'#4876EE'}
      >
        CineStack
      </Typography>
    </>
  )
}
