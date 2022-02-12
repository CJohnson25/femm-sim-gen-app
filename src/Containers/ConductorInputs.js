import React from 'react'
import { Grid, Typography, Alert } from '@mui/material'
import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'
import { RectConductorInputs } from './RectConductorInputs'
import { CircleCondInputs } from './CircleCondInputs'
import { wireGauges } from '../util'
import { ContainerToggle } from '../Components/ContainerToggle'

export function ConductorInputs({ control }) {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12}>
        <Alert severity="info">
          Currently this will only simulate 3 phase designs wiith overlapped
          windings.
        </Alert>
      </Grid>
      <Grid item xs={12}>
        <ContainerToggle
          label="Rectangle conductor?"
          childrenShowFalse={<CircleCondInputs control={control} />}
        >
          <RectConductorInputs control={control} />
        </ContainerToggle>
      </Grid>
      <Grid container spacing={2} item xs={12}>
        <Grid item xs={4}>
          <SimpleTextField
            control={control}
            name="NUM_PHASE_TURNS"
            label="# of Turns per Phase"
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField
            control={control}
            name="ROTOR_TO_STATOR_GAP"
            label="Rotor to Stator Air Gap"
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField
            control={control}
            name="PEAK_CURRENT"
            label="Peak Current"
          />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <SimpleSelect
          label="Wire Gauge"
          control={control}
          name="CONDUCTOR_MATERIAL"
          options={wireGauges}
        />
      </Grid>
    </Grid>
  )
}
