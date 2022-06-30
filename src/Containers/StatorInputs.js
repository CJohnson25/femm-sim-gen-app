import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from '@mui/material'

import { ConductorInputs } from './ConductorInputs'
import { WindingTypeInputs } from './WindingTypeInputs'
import { LabeLBig } from './LabeLBig'
import { GridCol } from './GridCol'

export function StatorInputs({ control }) {
  return (
    <GridCol>
      <Grid item>
        <LabeLBig>Stator</LabeLBig>
      </Grid>
      <Grid item>
        <WindingTypeInputs control={control} />
      </Grid>
      <Grid item>
        <ConductorInputs control={control} />
      </Grid>
    </GridCol>
  )
}

StatorInputs.propTypes = {
  control: PropTypes.object
}