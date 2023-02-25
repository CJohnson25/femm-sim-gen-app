import React from 'react'
import PropTypes from 'prop-types'

import { Controller, useFormContext } from 'react-hook-form'
// import { FormControl, FormHelperText, FormLabel, TextField, Tooltip } from '@mui/material'
import { FormControl, FormHelperText, Grid, TextField } from '@mui/material'
import { GridCol } from '../Containers/GridCol'

export function SimpleTextField({ name, label, helpText, onChange, ...rest }) {
  const {control} = useFormContext()

  // const formLabel = <FormLabel component="legend">{label}</FormLabel>

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange: onFieldChange, value } }) => (
        <FormControl>
          {/* {tooltip 
            ? (
              <Tooltip title={tooltip}>
                {formLabel()}
              </Tooltip>
            )
            : formLabel} */}
          <GridCol spacing={0}>
            <Grid item>
              <TextField 
                fullWidth
                size="small"
                sx={{ minWidth: 150 }}  
                label={label} 
                onChange={(e) => onChange(onFieldChange(e))} 
                value={value} 
                inputProps={{style: { textAlign: 'center' }}}
                {...rest} 
              />
            </Grid>
            <Grid item>
              <FormHelperText>{helpText}</FormHelperText>
            </Grid>
          </GridCol>
        </FormControl>
      )}
    />
  )
}

SimpleTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  tooltip: PropTypes.string,
  helpText: PropTypes.func,
  onChange: PropTypes.func
}