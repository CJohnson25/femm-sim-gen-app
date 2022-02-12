import React from 'react'
import { MenuItem, Select, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'

export function SimpleSelect({ control, name, options, label }) {
  const getSelectOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option} value={option}>
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
        <>
          <Typography>{label}</Typography>
          <Select onChange={onChange} value={value} sx={{ minWidth: 100 }}>
            {getSelectOptions()}
          </Select>
        </>
      )}
    />
  )
}
