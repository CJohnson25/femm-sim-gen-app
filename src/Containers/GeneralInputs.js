import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Typography } from '@mui/material'

import { SimpleRadio } from '../Components/SimpleRadio'
import { ContainerToggle } from '../Components/ContainerToggle'
import { AnalysisInputs } from '../Containers/AnalysisInputs'

import { unitTypes } from '../util'
import { GridCol } from './GridCol'
import { LabeLBig } from './LabeLBig'

export function GeneralInputs({ control }) {
  return (
    <GridCol>
      <Grid item>
        <LabeLBig>General</LabeLBig>
      </Grid>
      <Grid item>
        <SimpleRadio control={control} name="UNITS" options={unitTypes} />
      </Grid>
      <Grid item>
        <ContainerToggle label="Auto run Analysis?">
          <AnalysisInputs control={control} />
        </ContainerToggle>
      </Grid>
    </GridCol>
  )
}

GeneralInputs.propTypes = {
  control: PropTypes.object
}