import React from 'react'

import { Grid } from '@mui/material'

import { SimpleSelect } from '../Components/SimpleSelect'

import { windingTypes } from '../util'
import { GridCol } from './GridCol'

export function WindingTypeInputs() {
  return (
    <GridCol>
      <Grid item>
        <SimpleSelect
          label="Winding Type"
          name="WINDING_TYPE"
          options={windingTypes}
        />
      </Grid>
    </GridCol>
  )
}