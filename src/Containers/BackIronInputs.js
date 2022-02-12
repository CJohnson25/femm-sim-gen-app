import React from 'react'
import { Grid } from '@mui/material'
import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'
import { ironTypes } from '../util'

export function BackIronInputs({ control }) {
  return (
    <Grid container spacing={2} alignItems="flex-end">
      <Grid item xs={6}>
        <SimpleTextField
          control={control}
          name="BACK_IRON_HEIGHT"
          label="Back Iron Height"
        />
      </Grid>
      <Grid item xs={6}>
        <SimpleSelect
          label="Iron Material"
          control={control}
          name="BACK_IRON_MATERIAL"
          options={ironTypes}
        />
      </Grid>
    </Grid>
  )
}
