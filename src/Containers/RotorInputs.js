import React from 'react'

import { Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { ContainerToggle } from '../Components/ContainerToggle'

import { BackIronInputs } from './BackIronInputs'
import { MagnetInputs } from './MagnetInputs'
import { LabeLBig } from './LabeLBig'
import { GridCol } from './GridCol'
import { GridRow } from './GridRow'
import { useUnitAdormentLabel } from '../hooks'
import { SimpleSelect } from '../Components/SimpleSelect'

export function RotorInputs() {
  const {label: unitLabel} = useUnitAdormentLabel()

  return (
    <GridCol>
      <Grid item>
        <LabeLBig>Rotor</LabeLBig>
      </Grid>
      <Grid item>
        <SimpleSelect  name='NUM_ROTORS' label='Rotors to simulate' options={[2, 1]}/>
      </Grid>
      <GridRow item>
        <Grid item xs={4}>
          <SimpleTextField  name="AIR_GAP" label="Air Gap"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField
            name="MAGNET_GAP"
            label="Magnet Spacing"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleTextField
            name="NUM_ROTOR_POLE_PAIRS"
            label="# of Pole Pairs"
          />
        </Grid>
      </GridRow>
      <Grid item>
        <ContainerToggle label="Back Iron?" name="BACK_IRON">
          <BackIronInputs  />
        </ContainerToggle>
      </Grid>

      <Grid item>
        <MagnetInputs  />
      </Grid>

    </GridCol>
  )
}
