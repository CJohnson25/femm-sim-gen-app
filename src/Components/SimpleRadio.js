import React from 'react'
import PropTypes from 'prop-types'

import { Controller, useFormContext } from 'react-hook-form'
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

export function SimpleRadio({ name, label, options }) {
  const {control} = useFormContext()

  const getRadioOptions = () => {
    return options.map((option) => (
      <FormControlLabel
        key={option}
        value={option}
        label={option}
        control={<Radio />}
      />
    ))
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <FormLabel>{label}</FormLabel>
          <RadioGroup value={value} onChange={onChange} >
            {getRadioOptions()}
          </RadioGroup>
        </>
      )}
    />
  )
}

SimpleRadio.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array
}