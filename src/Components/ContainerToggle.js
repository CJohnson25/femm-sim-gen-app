import React from 'react'
import PropTypes from 'prop-types'

import { Grid, FormControlLabel, Switch, FormLabel } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { GridCol } from '../Containers/GridCol'

export function ContainerToggle({ label, children, name, onLabel= 'Yes', offLabel= 'No', childrenShowFalse = null, onChange = undefined }) {
  const [showChildren, setShowChildren] = React.useState(false)
  const {setValue} = useFormContext()

  const onToggleChange = () => {
    const val = showChildren === false ? 1 : 0 // cast to int
    setValue(name, val)
    setShowChildren(!showChildren)

    if (onChange) {
      onChange(val)
    }
  }

  return (
    <GridCol>
      <Grid item>
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
      {showChildren 
        ? <Grid item>
          {children}
        </Grid>
        : childrenShowFalse && <Grid item>
          {childrenShowFalse}
        </Grid>
      }
    </GridCol>
  )
}

ContainerToggle.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  setValue: PropTypes.func,
  onLabel: PropTypes.string,
  offLabel: PropTypes.string,
  children: PropTypes.any,
  childrenShowFalse: PropTypes.object,
  onChange: PropTypes.func
}