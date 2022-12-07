import React from 'react'

import { Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'

import { GridCol } from './GridCol'
import { useUnitAdormentLabel } from '../hooks'

export function CircleCondInputs() {
  const {label: unitLabel} = useUnitAdormentLabel()

  return (
    <GridCol>
      <Grid item>
        <SimpleTextField
          name="CONDUCTOR_DIAMETER"
          label="Conductor Diameter"
          InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
        />
      </Grid>
    </GridCol>
  )
}
