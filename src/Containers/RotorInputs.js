import React from 'react'
import PropTypes from 'prop-types'

import { Grid, InputAdornment, Typography } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { ContainerToggle } from '../Components/ContainerToggle'

import { BackIronInputs } from './BackIronInputs'
import { HalbachInputs } from './HalbachInputs'
import { MagnetInputs } from './MagnetInputs'
import { LabeLBig } from './LabeLBig'
import { GridCol } from './GridCol'
import { GridRow } from './GridRow'
import { useUnitAdormentLabel } from '../hooks'

export function RotorInputs({ control }) {
  const {label: unitLabel} = useUnitAdormentLabel(control)

  return (
    <GridCol>
      <Grid item>
        <LabeLBig>Rotor</LabeLBig>
      </Grid>
      <GridRow item>
        <Grid item xs={4}>
          <SimpleTextField control={control} name="AIR_GAP" label="Air Gap"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField
            control={control}
            name="MAGNET_GAP"
            label="Magnet Spacing"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField
            control={control}
            name="NUM_ROTOR_POLE_PAIRS"
            label="# of Pole Pairs"
          />
        </Grid>
      </GridRow>
      <Grid item>
        <ContainerToggle label="Back Iron?">
          <BackIronInputs control={control} />
        </ContainerToggle>
      </Grid>

      <Grid item>
        <MagnetInputs control={control} />
      </Grid>

    </GridCol>
  )
}

RotorInputs.propTypes = {
  control: PropTypes.object
}