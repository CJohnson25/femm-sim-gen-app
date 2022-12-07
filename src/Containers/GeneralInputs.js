import React from 'react'

import { Grid } from '@mui/material'

import { SimpleRadio } from '../Components/SimpleRadio'
import { ContainerToggle } from '../Components/ContainerToggle'
import { AnalysisInputs } from '../Containers/AnalysisInputs'

import { unitTypes } from '../util'
import { GridCol } from './GridCol'
import { LabeLBig } from './LabeLBig'

export function GeneralInputs() {
  return (
    <GridCol>
      <Grid item>
        <LabeLBig>General</LabeLBig>
      </Grid>
      <Grid item>
        <SimpleRadio name="UNITS" options={unitTypes} />
      </Grid>
      <Grid item>
        <ContainerToggle label="Auto run Analysis?" name="ANALYSIS">
          <AnalysisInputs />
        </ContainerToggle>
      </Grid>
    </GridCol>
  )
}
