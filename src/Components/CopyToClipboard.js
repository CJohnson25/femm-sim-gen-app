import React from 'react'
import PropTypes from 'prop-types'

import copy from 'clipboard-copy'

import Tooltip from '@mui/material/Tooltip'

export function CopyToClipboard({ children }) {
  const [showTooltip, setShowTooltip] = React.useState(false)

  function handleOnTooltipClose() {
    setShowTooltip(false)
  }

  function onCopy(content) {
    copy(content)
    setShowTooltip(true)
  }

  return (
    <Tooltip
      open={showTooltip}
      title={'Copied to clipboard!'}
      leaveDelay={1500}
      onClose={handleOnTooltipClose}
    >
      {children({ copy: onCopy })}
    </Tooltip>
  )
}

CopyToClipboard.propTypes = {
  children: PropTypes.any
}