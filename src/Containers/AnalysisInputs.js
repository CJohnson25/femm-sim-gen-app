import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { GridCol } from './GridCol'

export function AnalysisInputs({ control }) {
  return (
    <GridCol>
      <Grid item>
        <SimpleTextField
          control={control}
          name="FILEPATH"
          label="File Path"
          helperText="Must have a trailing slash. If using windows this must begin with a drive letter and contain trailing backslash. for example (C:\path\to\save\)"
        />
      </Grid>
      <Grid item>
        <SimpleTextField
          control={control}
          name="FILENAME"
          label="File Name"
          helperText="This must end in '.fem'"

        />
      </Grid>
    </GridCol>
  )
}

AnalysisInputs.propTypes = {
  control: PropTypes.object
}