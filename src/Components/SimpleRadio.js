import React from 'react'
import PropTypes from 'prop-types'

import { Controller } from 'react-hook-form'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'

export function SimpleRadio({ control, name, options }) {
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
        <RadioGroup value={value} onChange={onChange}>
          {getRadioOptions()}
        </RadioGroup>
      )}
    />
  )
}

SimpleRadio.propTypes = {
  name: PropTypes.string,
  control: PropTypes.object,
  options: PropTypes.array
}