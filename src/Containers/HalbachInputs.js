import React from 'react'
import PropTypes from 'prop-types'

import { Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'

import { magnetTypes } from '../util'
import { GridRow } from './GridRow'
import { GridCol } from './GridCol'
import { useUnitAdormentLabel } from '../hooks'

export function HalbachInputs({ control }) {
  const {label: unitLabel} = useUnitAdormentLabel(control)

  return (
    <GridCol>
      <GridRow item>
        <Grid item xs={4}>
          <SimpleTextField
            control={control}
            name="HALBACH_LENGTH"
            label="Length"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField control={control} name="HALBACH_WIDTH" label="Width"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField
            control={control}
            name="HALBACH_HEIGHT"
            label="Height"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
      </GridRow>
      <Grid item>
        <SimpleSelect
          control={control}
          name="HALBACH_GRADE"
          label="Grade"
          options={magnetTypes}
        />
      </Grid>
    </GridCol>
  )
}

HalbachInputs.propTypes = {
  control: PropTypes.object
}