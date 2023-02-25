import React from 'react'

import { Alert, Grid, InputAdornment } from '@mui/material'

import { SimpleTextField } from '../Components/SimpleTextField'
import { SimpleSelect } from '../Components/SimpleSelect'
import { ContainerToggle } from '../Components/ContainerToggle'

import { RectConductorInputs } from './RectConductorInputs'
import { CircleCondInputs } from './CircleCondInputs'

import { INPUT_WIDTH, wireGauges } from '../util'
import { GridRow } from './GridRow'
import { GridCol } from './GridCol'
import { useUnitAdormentLabel } from '../hooks'
import { LabelSmall } from './LabelSmall'

export function ConductorInputs() {
  const {label: unitLabel} = useUnitAdormentLabel()

  return (
    <GridCol>
      <GridCol item>
        <Grid item>
          <LabelSmall>Conductor</LabelSmall>
        </Grid>
      </GridCol>
      <Grid item style={{ width: '70%' }}>
        <Alert severity="info">
          This section is limited/buggy. You are likely better off manually modeling the stator after running the script
        </Alert>
      </Grid>
      <Grid item>
        <ContainerToggle
          label="Rectangle conductor?"
          name="RECTANGLE_CONDUCTOR"
          childrenShowFalse={<CircleCondInputs />}
        >
          <RectConductorInputs />
        </ContainerToggle>
      </Grid>
      <GridRow item>
        <Grid item>
          <SimpleTextField
            name="NUM_PHASE_TURNS"
            label="Turns per Phase"
            InputProps={{endAdornment: <InputAdornment position="end">Turns</InputAdornment>}}
            style={{width:INPUT_WIDTH}}
          />
        </Grid>
        <Grid item>
          <SimpleTextField
            name="PEAK_CURRENT"
            label="Peak Current"
            InputProps={{endAdornment: <InputAdornment position="end">A</InputAdornment>}}
            style={{width:INPUT_WIDTH}}
          />
        </Grid>
        
        <Grid item>
          <SimpleTextField
            label="Conductor gap"
            name="CONDUCTOR_GAP"
            InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
            style={{width:INPUT_WIDTH}}
          />
        </Grid>
        <Grid item>
          <SimpleSelect
            label="Wire Gauge"
            name="CONDUCTOR_MATERIAL"
            options={wireGauges}
            style={{width:INPUT_WIDTH}}
          />
        </Grid>
      </GridRow>
    </GridCol>
  )
}
