import React from 'react'
import PropTypes from 'prop-types'

import { Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'

import { getUnits, ironTypes } from '../util'
import { GridRow } from './GridRow'
import { useUnitAdormentLabel } from '../hooks'

export function BackIronInputs({ control }) {
  const {label: unitLabel} = useUnitAdormentLabel(control)

  return (
    <GridRow>
      <Grid item>
        <SimpleTextField
          control={control}
          name="BACK_IRON_HEIGHT"
          label="Back Iron Height"
          InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
        />
      </Grid>
      <Grid item>
        <SimpleSelect
          label="Iron Material"
          control={control}
          name="BACK_IRON_MATERIAL"
          options={ironTypes}
        />
      </Grid>
    </GridRow>
  )
}

BackIronInputs.propTypes = {
  control: PropTypes.object
}