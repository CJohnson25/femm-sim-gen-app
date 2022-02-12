import React from 'react'
import { Grid, Typography } from '@mui/material'
import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'
import { magnetTypes } from '../util'

export function HalbachInputs({ control }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <SimpleTextField
          control={control}
          name="HALBACH_LENGTH"
          label="Length"
        />
      </Grid>
      <Grid item xs={4}>
        <SimpleTextField control={control} name="HALBACH_WIDTH" label="Width" />
      </Grid>
      <Grid item xs={4}>
        <SimpleTextField
          control={control}
          name="HALBACH_HEIGHT"
          label="Height"
        />
      </Grid>
      <Grid item xs={12}>
        <SimpleSelect
          label="Grade"
          control={control}
          name="HALBACH_GRADE"
          options={magnetTypes}
        />
      </Grid>
    </Grid>
  )
}
