import React from 'react'

import { Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'

import { INPUT_WIDTH, magnetTypes } from '../util'
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
        <Grid item>
          <SimpleSelect
            name="HALBACH_GRADE"
            label="Grade"
            options={magnetTypes}
            style={{width:INPUT_WIDTH}}
          />
        </Grid>
        <Grid item>
          <SimpleTextField
            name="HALBACH_LENGTH"
            label="Length"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
            style={{width:INPUT_WIDTH}}
          />
        </Grid>
        <Grid item>
          <SimpleTextField 
            name="HALBACH_WIDTH" 
            label="Width"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
            style={{width:INPUT_WIDTH}}
          />
        </Grid>
        <Grid item>
          <SimpleTextField
            name="HALBACH_HEIGHT"
            label="Height"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
            style={{width:INPUT_WIDTH}}
          />
        </Grid>
      </GridRow>
    </GridCol>
  )
}
