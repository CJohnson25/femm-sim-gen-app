import React from 'react'

import { Grid } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { GridCol } from './GridCol'
// import { Controller, useFormContext } from 'react-hook-form'

export function AnalysisInputs() {
  // const {control} = useFormContext()

  return (
    <GridCol item>
      <Grid item>
        <SimpleTextField
          name="FILEPATH"
          label="File Path"
          helperText="Must have a trailing slash. If using windows this must begin with a drive letter and contain trailing backslash. for example (C:\path\to\save\)"
          style={{width:'300px'}}
        />

        {/* <Controller
          name="FILEPATH"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <FormLabel component="legend">File Path</FormLabel>
              <input 
                webkitdirectory={true}
                type="file"
                onChange={onChange} 
                value={value} 
                // helperText="Must have a trailing slash. If using windows this must begin with a drive letter and contain trailing backslash. for example (C:\path\to\save\)"
                style={{width:'300px'}}
              />
            </>
          )}
        /> */}

      </Grid>
      <Grid item>
        <SimpleTextField
          name="FILENAME"
          label="File Name"
          style={{width:'300px'}}
        />
      </Grid>
    </GridCol>
  )
}