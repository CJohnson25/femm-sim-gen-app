import React from 'react'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

export function SimpleTextField({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField onChange={onChange} value={value} label={label} />
      )}
    />
  )
}
