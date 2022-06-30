import React from 'react'
import PropTypes from 'prop-types'

import { IconButton } from '@mui/material'

export function FooterIcon({ Icon, href }) {
  return (
    <IconButton
      target="_blank"
      variant="contained"
      color="primary"
      href={href}
    >
      <Icon />
    </IconButton>
  )
}

FooterIcon.propTypes = {
  Icon: PropTypes.func,
  href: PropTypes.string
}
