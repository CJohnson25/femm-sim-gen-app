import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

export function GridRow({ children, ...rest }) {
  return (
    <Grid container spacing={2} justifyContent="center" {...rest} >
      {children}
    </Grid>
  )
}

GridRow.propTypes = {
  children: PropTypes.any
}