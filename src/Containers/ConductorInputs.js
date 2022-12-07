import React from 'react'

import { Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'
import { ContainerToggle } from '../Components/ContainerToggle'

import { RectConductorInputs } from './RectConductorInputs'
import { CircleCondInputs } from './CircleCondInputs'

import { wireGauges } from '../util'
import { GridRow } from './GridRow'
import { GridCol } from './GridCol'
import { useUnitAdormentLabel } from '../hooks'

export function ConductorInputs() {
  const {label: unitLabel} = useUnitAdormentLabel()

  return (
    <GridCol>
      <Grid item>
        <ContainerToggle
          label="Rectangle conductor?"
          name="RECTANGLE_CONDUCTOR"
          childrenShowFalse={<CircleCondInputs />}
        >
          <RectConductorInputs />
        </ContainerToggle>
      </Grid>
      <GridRow item>
      <Grid item xs={6}>
          <SimpleTextField
            name="ROTOR_TO_STATOR_GAP"
            label="Rotor to Stator Air Gap"
            InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
          />
        </Grid>
        <Grid item xs={6}>
          <SimpleTextField
            label="Stator Height"
            name="STATOR_HEIGHT"
            InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
          />
        </Grid>
        <Grid item xs={6}>
          <SimpleTextField
            name="NUM_PHASE_TURNS"
            label="Turns per Phase"
          />
        </Grid>
        <Grid item xs={6}>
          <SimpleTextField
            name="PEAK_CURRENT"
            label="Peak Current"
            InputProps={{endAdornment: <InputAdornment position="end">A</InputAdornment>}}
          />
        </Grid>
        
        <Grid item xs={6}>
          <SimpleTextField
            label="Conductor gap"
            name="CONDUCTOR_GAP"
            InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
          />
        </Grid>
      </GridRow>
        <Grid item xs={4}>
          <SimpleSelect
            label="Wire Gauge"
            name="CONDUCTOR_MATERIAL"
            options={wireGauges}
          />
        </Grid>
    </GridCol>
  )
}
