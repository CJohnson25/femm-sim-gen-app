import React from 'react'

import { Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'

import { GridRow } from './GridRow'
import { INPUT_WIDTH, ironTypes } from '../util'
import { useUnitAdormentLabel } from '../hooks'

export function BackIronInputs() {
  const {label: unitLabel} = useUnitAdormentLabel()

  return (
    <GridRow>
      <Grid item>
        <SimpleTextField
          name="BACK_IRON_HEIGHT"
          label="Back Iron Height"
          InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
          style={{width:INPUT_WIDTH}}
        />
      </Grid>
      <Grid item>
        <SimpleSelect
          label="Iron Material"
          name="BACK_IRON_MATERIAL"
          options={ironTypes}
          style={{width:INPUT_WIDTH}}
        />
      </Grid>
    </GridRow>
  )
}
