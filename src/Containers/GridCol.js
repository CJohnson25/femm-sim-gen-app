import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

export function GridCol({ children, ...rest }) {
  return (
    <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center" {...rest}>
      {children}
    </Grid>
  )
}

GridCol.propTypes = {
  children: PropTypes.any
}