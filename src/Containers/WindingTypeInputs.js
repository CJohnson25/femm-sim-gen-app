import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from '@mui/material'

import { SimpleSelect } from '../Components/SimpleSelect'

import { windingTypes } from '../util'
import { GridCol } from './GridCol'

export function WindingTypeInputs({ control }) {
  return (
    <GridCol>
      <Grid item>
        <SimpleSelect
          label="Winding Type"
          control={control}
          name="WINDING_TYPE"
          options={windingTypes}
        />
      </Grid>
    </GridCol>
  )
}


WindingTypeInputs.propTypes = {
  control: PropTypes.object
}