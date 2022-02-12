import React from 'react'
import { Grid, FormControlLabel, Switch, FormLabel } from '@mui/material'

export function ContainerToggle({ label, children, childrenShowFalse = null }) {
  const [showChildren, setShowChildren] = React.useState(false)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormLabel component="legend">{label}</FormLabel>
        <FormControlLabel
          control={
            <Switch
              value={showChildren}
              onChange={() => setShowChildren(!showChildren)}
            />
          }
          label={!showChildren ? 'No' : 'Yes'}
        />
      </Grid>
      <Grid item xs={12}>
        {showChildren ? children : childrenShowFalse}
      </Grid>
    </Grid>
  )
}
