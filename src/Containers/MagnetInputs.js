import React from 'react'
import PropTypes from 'prop-types'

import { Grid, InputAdornment, Typography } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'

import { magnetTypes } from '../util'
import { GridRow } from './GridRow'
import { LabelSmall } from './LabelSmall'
import { GridCol } from './GridCol'
import { useUnitAdormentLabel } from '../hooks'
import { ContainerToggle } from '../Components/ContainerToggle'
import { HalbachInputs } from './HalbachInputs'

export function MagnetInputs({ control }) {
  const { label: unitLabel } = useUnitAdormentLabel(control)

  return (
    <GridCol>
      <Grid item>
        <LabelSmall>Magnets</LabelSmall>
      </Grid>
      <GridRow item>
        <Grid item xs={4}>
          <SimpleTextField
            control={control}
            name="MAGNET_LENGTH"
            label="Length"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField control={control} name="MAGNET_WIDTH" label="Width"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField
            control={control}
            name="MAGNET_HEIGHT"
            label="Height"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
      </GridRow>
      <Grid item>
        <SimpleSelect
          control={control}
          name="MAGNET_GRADE"
          label="Grade"
          options={magnetTypes}
        />
      </Grid>
      <Grid item>
        <ContainerToggle label="Halbach?">
          <HalbachInputs control={control} />
        </ContainerToggle>
      </Grid>
    </GridCol>
  )
}

MagnetInputs.propTypes = {
  control: PropTypes.object
}