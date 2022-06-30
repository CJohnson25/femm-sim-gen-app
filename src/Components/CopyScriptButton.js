import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Typography, Button, TextField } from '@mui/material'

import { CopyToClipboard } from './CopyToClipboard'

export function CopyScriptButton({ outputText }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={8}>
        <Typography variant="h2">Output</Typography>
        <Typography>
          Copy this LUA script and paste it in the LUA console in your FEMM
          program.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CopyToClipboard>
          {({ copy }) => (
            <Button
              variant="contained"
              color="primary"
              onClick={() => copy(outputText)}
            >
              Click to Copy
            </Button>
          )}
        </CopyToClipboard>
      </Grid>
      <Grid item xs={8}>
        <TextField fullWidth multiline rows={20} value={outputText} />
      </Grid>
    </Grid>
  )
}

CopyScriptButton.propTypes = {
  outputText: PropTypes.string
}