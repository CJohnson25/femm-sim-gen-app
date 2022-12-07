import React from 'react'

import { Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'

import { magnetTypes } from '../util'
import { GridRow } from './GridRow'
import { GridCol } from './GridCol'
import { useUnitAdormentLabel } from '../hooks'
import { LabelSmall } from './LabelSmall'

export function HalbachInputs() {
  const {label: unitLabel} = useUnitAdormentLabel()

  return (
    <GridCol>
      <Grid>
      <LabelSmall>Halbach Magnets</LabelSmall>
      </Grid>
      <GridRow item>
        <Grid item xs={4}>
          <SimpleTextField
            name="HALBACH_LENGTH"
            label="Length"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField 
            name="HALBACH_WIDTH" 
            label="Width"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField
            name="HALBACH_HEIGHT"
            label="Height"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
      </GridRow>
      <Grid item>
        <SimpleSelect
          name="HALBACH_GRADE"
          label="Grade"
          options={magnetTypes}
        />
      </Grid>
    </GridCol>
  )
}
