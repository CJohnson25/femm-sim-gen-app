import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

export function LabeLBig({ children }) {
  return <Typography variant="h2">{children}</Typography>
}

LabeLBig.propTypes = {
  children: PropTypes.any
}