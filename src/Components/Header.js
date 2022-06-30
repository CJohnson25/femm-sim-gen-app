import React from 'react'
import { Alert, Grid, Typography } from '@mui/material'
import { LabeLBig } from '../Containers/LabeLBig'
import { GridCol } from '../Containers/GridCol'

export function Header() {
  return (
    <GridCol item>
      <Grid item>
        <Typography variant="h1">Motor Sim Generator</Typography>
      </Grid>
      <Grid item style={{ width: '50%' }}>
        <Typography>
          This form will generate a LUA script that can then be run in FEMM to produce a 2D simulation of a dual rotor, 3 phase air-core axial flux permanant magnet motor.
        </Typography>
      </Grid>
      <Grid item style={{ width: '40%' }}>
        <Alert severity="info">
          This is still a work in progress and may support other motor architechtures in the future.
        </Alert>
      </Grid>
    </GridCol>
  )
}
