import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

export function LabelSmall({ children }) {
  return <Typography variant="h4">{children}</Typography>
}

LabelSmall.propTypes = {
  children: PropTypes.any
}