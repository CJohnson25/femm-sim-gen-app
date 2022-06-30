import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Alert, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'
import { ContainerToggle } from '../Components/ContainerToggle'

import { RectConductorInputs } from './RectConductorInputs'
import { CircleCondInputs } from './CircleCondInputs'

import { wireGauges } from '../util'
import { GridRow } from './GridRow'
import { GridCol } from './GridCol'
import { useUnitAdormentLabel } from '../hooks'

export function ConductorInputs({ control }) {
  const {label: unitLabel} = useUnitAdormentLabel(control)

  return (
    <GridCol>
      <Grid item>
        <Alert severity="info">
          Currently this will only simulate 3 phase designs wiith overlapped
          windings.
        </Alert>
      </Grid>
      <Grid item>
        <ContainerToggle
          label="Rectangle conductor?"
          childrenShowFalse={<CircleCondInputs control={control} />}
        >
          <RectConductorInputs control={control} />
        </ContainerToggle>
      </Grid>
      <GridRow item>
        <Grid item xs={4}>
          <SimpleTextField
            control={control}
            name="NUM_PHASE_TURNS"
            label="Turns per Phase"
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField
            control={control}
            name="ROTOR_TO_STATOR_GAP"
            label="Rotor to Stator Air Gap"
            InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField
            control={control}
            name="PEAK_CURRENT"
            label="Peak Current"
            InputProps={{endAdornment: <InputAdornment position="end">A</InputAdornment>}}
          />
        </Grid>
      </GridRow>
      <Grid item>
        <SimpleSelect
          label="Wire Gauge"
          control={control}
          name="CONDUCTOR_MATERIAL"
          options={wireGauges}
        />
      </Grid>
    </GridCol>
  )
}

ConductorInputs.propTypes = {
  control: PropTypes.object
}