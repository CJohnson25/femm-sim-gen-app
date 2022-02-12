import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { SimpleRadio } from '../Components/SimpleRadio'
import { ContainerToggle } from '../Components/ContainerToggle'
import { AnalysisInputs } from './AnalysisInputs'
import { unitTypes } from '../util'

export function GeneralInputs({ control }) {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h2">General</Typography>
      </Grid>
      <Grid item>
        <SimpleRadio control={control} name="UNITS" options={unitTypes} />
      </Grid>
      <Grid item xs={12}>
        <ContainerToggle label="Auto run Analysis?">
          <AnalysisInputs control={control} />
        </ContainerToggle>
      </Grid>
    </Grid>
  )
}
