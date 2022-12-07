import React from 'react'

import { Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'

import { GridRow } from './GridRow'
import { useUnitAdormentLabel } from '../hooks'

export function RectConductorInputs() {
  const {label: unitLabel} = useUnitAdormentLabel(control)

  return (
    <GridRow>
      <Grid item xs={6}>
        <SimpleTextField
          name="CONDUCTOR_WIDTH"
          label="Conductor Width"
          InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
        />
      </Grid>
      <Grid item xs={6}>
        <SimpleTextField
          name="CONDUCTOR_HEIGHT"
          label="Conductor Height"
          InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
        />
      </Grid>
    </GridRow>
  )
}
