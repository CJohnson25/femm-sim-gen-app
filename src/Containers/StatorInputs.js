import React from 'react'

import { Alert, Grid } from '@mui/material'

import { ConductorInputs } from './ConductorInputs'
import { WindingTypeInputs } from './WindingTypeInputs'
import { LabeLBig } from './LabeLBig'
import { GridCol } from './GridCol'

export function StatorInputs() {
  return (
    <GridCol>
      <Grid item>
        <LabeLBig>Stator</LabeLBig>
      </Grid>
      <Grid item>
        <Alert severity="info">
          This section is limited/buggy. You are likely better off manually modeling the stator after running the script
        </Alert>
      </Grid>
      <Grid item>
        <WindingTypeInputs />
      </Grid>
      <Grid item>
        <ConductorInputs />
      </Grid>
    </GridCol>
  )
}
