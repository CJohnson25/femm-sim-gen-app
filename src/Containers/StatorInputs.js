import React from 'react'
import { Grid, Typography } from '@mui/material'
import { ConductorInputs } from '../Containers/ConductorInputs'

export function StatorInputs({ control }) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h2">Stator</Typography>
      </Grid>
      <Grid item xs={12}>
        <ConductorInputs control={control} />
      </Grid>
    </Grid>
  )
}
