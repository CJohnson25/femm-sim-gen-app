import React from 'react'
import PropTypes from 'prop-types'

import { Grid, InputAdornment } from '@mui/material'
import { SimpleTextField } from '../Components/SimpleTextField'
import { GridCol } from './GridCol'
import { useUnitAdormentLabel } from '../hooks'

export function CircleCondInputs({ control }) {
  const {label: unitLabel} = useUnitAdormentLabel(control)

  return (
    <GridCol>
      <Grid item>
        <SimpleTextField
          control={control}
          name="CONDUCTOR_DIAMETER"
          label="Conductor Diameter"
          InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
        />
      </Grid>
    </GridCol>
  )
}

CircleCondInputs.propTypes = {
  control: PropTypes.object
}