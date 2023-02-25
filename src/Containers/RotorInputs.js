import React from 'react'

import { Alert, Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { ContainerToggle } from '../Components/ContainerToggle'

import { BackIronInputs } from './BackIronInputs'
import { MagnetInputs } from './MagnetInputs'
import { LabeLBig } from './LabeLBig'
import { GridCol } from './GridCol'
import { GridRow } from './GridRow'
import { useUnitAdormentLabel } from '../hooks'
import { SimpleSelect } from '../Components/SimpleSelect'
import { INPUT_WIDTH } from '../util'
import { useFormContext } from 'react-hook-form'

export function RotorInputs() {
  const {label: unitLabel} = useUnitAdormentLabel()
  const { getValues } = useFormContext()

  return (
    <GridCol item md={4}>
      <GridRow item>
        <Grid item>
          <LabeLBig>Rotor</LabeLBig>
        </Grid>
      </GridRow>
      <GridRow item alignItems="flex-start">
        <Grid item>
          <SimpleSelect  
            name='NUM_ROTORS'
            label='# of Rotors'
            options={[2, 1]}
            // style={{width:INPUT_WIDTH}}
          />
        </Grid>
        <Grid item>
          <SimpleTextField
            name="MAGNET_GAP"
            label="Magnet Spacing"
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
            style={{width:INPUT_WIDTH}}
          />
        </Grid>
        <Grid item>
          <SimpleTextField
            name="NUM_ROTOR_POLE_PAIRS"
            label="# of Pole Pairs"
            style={{width:INPUT_WIDTH}}
          />
        </Grid>
        <Grid item>
          <SimpleTextField  
            name="AIR_GAP"
            label="Air Gap"
            disabled={getValues('STATOR')}
            InputProps={{ endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment> }}
            style={{width:INPUT_WIDTH}}
          />
        </Grid>
        <Grid item xs={12}>
          <Alert severity="info">
            There is currently a bug in the lua script when only using Air Gap. To work around this, use &apos;Stator Height&apos; and &apos;Rotor/Stator Air Gap&apos; fields to change the Air Gap. Turn the Stator toggle off if you ultimately would not like to model a stator.
          </Alert>  
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
