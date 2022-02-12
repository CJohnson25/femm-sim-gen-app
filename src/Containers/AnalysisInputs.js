import React from 'react'
import { Grid, Alert } from '@mui/material'
import { SimpleTextField } from '../Components/SimpleTextField'

export function AnalysisInputs({ control }) {
  return (
    <Grid container spacing={4}>
      <Grid container spacing={1} item xs={12}>
        <Grid item xs={12}>
          <SimpleTextField
            control={control}
            name="FILEPATH"
            label="File Path"
          />
        </Grid>
        <Grid item xs={12}>
          <Alert severity="info">
            Must have a trailing slash. If using windows this must begin with a
            drive letter and contain trailing backslashe. for example
            (C:\path\to\save\)
          </Alert>
        </Grid>
      </Grid>
      <Grid container spacing={1} item xs={12}>
        <Grid item xs={12}>
          <SimpleTextField
            control={control}
            name="FILENAME"
            label="File Name"
          />
        </Grid>
        <Grid item xs={12}>
          <Alert severity="info">This must end in '.fem'</Alert>
        </Grid>
      </Grid>
    </Grid>
  )
}
