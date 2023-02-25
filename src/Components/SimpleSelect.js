import React from 'react'
import PropTypes from 'prop-types'

import { Controller, useFormContext } from 'react-hook-form'
import { FormControl, InputLabel , MenuItem, Select } from '@mui/material'

export function SimpleSelect({ name, options, label, ...rest }) {
  const {control} = useFormContext()

  const getSelectOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem 
          key={option} 
          value={option}  
          style={{ textAlign: 'right' }}
        >
          {option}
        </MenuItem>
      )
    })
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <FormControl >
          <InputLabel  component="legend">{label}</InputLabel >
          <Select 
            label={label} 
            size="small" 
            autoWidth
            onChange={onChange} 
            value={value} 
            sx={{ minWidth: 150 }} 
            {...rest}
          >
            {getSelectOptions()}
          </Select>
        </FormControl>
      )}
    />
  )
}

SimpleSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array
}