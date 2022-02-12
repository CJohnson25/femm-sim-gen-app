import React from 'react'
import { Grid } from '@mui/material'
import { SimpleTextField } from '../Components/SimpleTextField'

export function CircleCondInputs({ control }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SimpleTextField
          control={control}
          name="CONDUCTOR_DIAMETER"
          label="Conductor Diameter"
        />
      </Grid>
    </Grid>
  )
}
