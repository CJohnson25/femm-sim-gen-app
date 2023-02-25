import React from 'react'

import { Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'

import { GridRow } from './GridRow'
import { useUnitAdormentLabel } from '../hooks'
import { INPUT_WIDTH } from '../util'

export function RectConductorInputs() {
  const {label: unitLabel} = useUnitAdormentLabel()

  return (
    <GridRow>
      <Grid item xs={6}>
        <SimpleTextField
          name="CONDUCTOR_WIDTH"
          label="Width"
          InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
          style={{width:INPUT_WIDTH}}
        />
      </Grid>
      <Grid item xs={6}>
        <SimpleTextField
          name="CONDUCTOR_HEIGHT"
          label="Height"
          InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
          style={{width:INPUT_WIDTH}}
        />
      </Grid>
    </GridRow>
  )
}
