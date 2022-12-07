import React from 'react'

import { Grid } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { GridCol } from './GridCol'

export function AnalysisInputs() {
  return (
    <GridCol>
      <Grid item>
        <SimpleTextField
          name="FILEPATH"
          label="File Path"
          helperText="Must have a trailing slash. If using windows this must begin with a drive letter and contain trailing backslash. for example (C:\path\to\save\)"
        />
      </Grid>
      <Grid item>
        <SimpleTextField
          name="FILENAME"
          label="File Name"
          helperText="This must end in '.fem'"

        />
      </Grid>
    </GridCol>
  )
}