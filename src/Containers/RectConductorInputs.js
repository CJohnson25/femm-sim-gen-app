import React from 'react'
import { Grid } from '@mui/material'
import { SimpleTextField } from '../Components/SimpleTextField'

export function RectConductorInputs({ control }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <SimpleTextField
          control={control}
          name="CONDUCTOR_WIDTH"
          label="Conductor Width"
        />
      </Grid>
      <Grid item xs={6}>
        <SimpleTextField
          control={control}
          name="CONDUCTOR_HEIGHT"
          label="Conductor Height"
        />
      </Grid>
    </Grid>
  )
}
