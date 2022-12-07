import React from 'react'
import PropTypes from 'prop-types'

import { Grid, FormControlLabel, Switch, FormLabel } from '@mui/material'
import { useFormContext } from 'react-hook-form'

export function ContainerToggle({ label, children, name, onLabel= 'Yes', offLabel= 'No', childrenShowFalse = null }) {
  const [showChildren, setShowChildren] = React.useState(false)
  const {setValue} = useFormContext()

  const onToggleChange = () => {
    const val = showChildren === false ? 1 : 0 // cast to int
    setValue(name, val)
    setShowChildren(!showChildren)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormLabel component="legend">{label}</FormLabel>
        <FormControlLabel
          control={
            <Switch
              value={showChildren}
              name={name}
              onChange={onToggleChange}
            />
          }
          label={!showChildren ? offLabel : onLabel}
        />
      </Grid>
      <Grid item xs={12}>
        {showChildren ? children : childrenShowFalse}
      </Grid>
    </Grid>
  )
}

ContainerToggle.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  setValue: PropTypes.func,
  onLabel: PropTypes.string,
  offLabel: PropTypes.string,
  children: PropTypes.any,
  childrenShowFalse: PropTypes.object
}