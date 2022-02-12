import React from 'react'
import { Grid, Typography } from '@mui/material'
import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'
import { magnetTypes } from '../util'

export function MagnetInputs({ control }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Typography>Magnets</Typography>
      </Grid>
      <Grid item xs={4}>
        <SimpleTextField
          control={control}
          name="MAGNET_LENGTH"
          label="Length"
        />
      </Grid>
      <Grid item xs={4}>
        <SimpleTextField control={control} name="MAGNET_WIDTH" label="Width" />
      </Grid>
      <Grid item xs={4}>
        <SimpleTextField
          control={control}
          name="MAGNET_HEIGHT"
          label="Height"
        />
      </Grid>
      <Grid item xs={12}>
        <SimpleSelect
          label="Grade"
          control={control}
          name="MAGNET_GRADE"
          options={magnetTypes}
        />
      </Grid>
    </Grid>
  )
}
