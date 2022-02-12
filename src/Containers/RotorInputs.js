import React from 'react'
import { Grid, Typography, Divider } from '@mui/material'
import { SimpleTextField } from '../Components/SimpleTextField'
import { ContainerToggle } from '../Components/ContainerToggle'
import { BackIronInputs } from './BackIronInputs'
import { HalbachInputs } from './HalbachInputs'
import { MagnetInputs } from './MagnetInputs'

export function RotorInputs({ control }) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h2">Rotor</Typography>
      </Grid>
      <Grid item xs={12} container spacing={2} justifyContent="center">
        <Grid item xs={6} sm={4}>
          <SimpleTextField control={control} name="AIR_GAP" label="Air Gap" />
        </Grid>
        <Grid item xs={6} sm={4}>
          <SimpleTextField
            control={control}
            name="MAGNET_GAP"
            label="Magnet Spacing"
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <SimpleTextField
            control={control}
            name="NUM_ROTOR_POLE_PAIRS"
            label="# of Pole Pairs"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <MagnetInputs control={control} />
      </Grid>
      <Grid item xs={12}>
        <ContainerToggle label="Halbach?">
          <HalbachInputs control={control} />
        </ContainerToggle>
      </Grid>
      <Grid item xs={12}>
        <ContainerToggle label="Back Iron?">
          <BackIronInputs control={control} />
        </ContainerToggle>
      </Grid>
    </Grid>
  )
}
