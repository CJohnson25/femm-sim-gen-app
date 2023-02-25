import React from 'react'

import { Grid, InputAdornment } from '@mui/material'

import { SimpleRadio } from '../Components/SimpleRadio'
// import { ContainerToggle } from '../Components/ContainerToggle'
// import { AnalysisInputs } from '../Containers/AnalysisInputs'

import { INPUT_WIDTH, unitTypes } from '../util'
import { GridCol } from './GridCol'
import { LabeLBig } from './LabeLBig'
import { GridRow } from './GridRow'
import { SimpleTextField } from '../Components/SimpleTextField'
import { useUnitAdormentLabel } from '../hooks'

export function GeneralInputs() {
  const {label: unitLabel} = useUnitAdormentLabel()

  return (
    <GridCol item xs={12} md={4}>
      <GridRow item>
        <Grid item>
          <LabeLBig>General</LabeLBig>
        </Grid>
      </GridRow>

      <GridCol item>
        <Grid item>
          <SimpleRadio name="UNITS" label="Units" options={unitTypes} />
        </Grid>

        <Grid item>
          <SimpleTextField
            name="ANALYSIS_HEIGHT"
            label="variable analysis line height"
            style={{width:INPUT_WIDTH}}
            InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
          />
        </Grid>

        {/* <Grid item>
          <ContainerToggle label="Auto run Analysis?" name="ANALYSIS">
            <AnalysisInputs />
          </ContainerToggle>
        </Grid> */}
      </GridCol>

    </GridCol>
  )
}
