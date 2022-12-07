import React from 'react'
import PropTypes from 'prop-types'

import { Controller, useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material'

export function SimpleTextField({ name, label, ...rest }) {
  const {control} = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField onChange={onChange} value={value} label={label} {...rest} />
      )}
    />
  )
}

SimpleTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string
}