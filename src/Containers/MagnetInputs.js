import React from 'react'

import { Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'
import { ContainerToggle } from '../Components/ContainerToggle'

import { magnetTypes } from '../util'
import { useUnitAdormentLabel } from '../hooks'
import { GridRow } from './GridRow'
import { GridCol } from './GridCol'
import { LabelSmall } from './LabelSmall'
import { HalbachInputs } from './HalbachInputs'

export function MagnetInputs() {
  const { label: unitLabel } = useUnitAdormentLabel()

  return (
    <GridCol>
      <Grid item>
        <LabelSmall>Magnets</LabelSmall>
      </Grid>
      <GridRow item>
        <Grid item xs={4}>
          <SimpleTextField
            name="MAGNET_LENGTH"
            label="Length"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField name="MAGNET_WIDTH" label="Width"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField
            name="MAGNET_HEIGHT"
            label="Height"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
      </GridRow>
      <Grid item>
        <SimpleSelect
          name="MAGNET_GRADE"
          label="Grade"
          options={magnetTypes}
        />
      </Grid>
      <Grid item>
        <ContainerToggle label="Halbach?" name="HALBACH">
          <HalbachInputs />
        </ContainerToggle>
      </Grid>
    </GridCol>
  )
}
