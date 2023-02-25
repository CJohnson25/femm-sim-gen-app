import React from 'react'

import { Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'

import { GridCol } from './GridCol'
import { useUnitAdormentLabel } from '../hooks'
import { INPUT_WIDTH } from '../util'

export function CircleCondInputs() {
  const {label: unitLabel} = useUnitAdormentLabel()

  return (
    <GridCol>
      <Grid item>
        <SimpleTextField
          name="CONDUCTOR_DIAMETER"
          label="Diameter"
          InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
          style={{width:INPUT_WIDTH}}
        />
      </Grid>
    </GridCol>
  )
}
