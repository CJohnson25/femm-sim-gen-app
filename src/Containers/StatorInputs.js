import React from 'react'

import { Grid, InputAdornment } from '@mui/material'

import { ConductorInputs } from './ConductorInputs'
import { LabeLBig } from './LabeLBig'
import { GridCol } from './GridCol'
import { SimpleTextField } from '../Components/SimpleTextField'
import { useUnitAdormentLabel } from '../hooks'
import { getAirGap, INPUT_WIDTH } from '../util'
// import { INPUT_WIDTH, windingTypes } from '../util'
// import { SimpleSelect } from '../Components/SimpleSelect'
import { GridRow } from './GridRow'
import { useFormContext } from 'react-hook-form'

export function StatorInputs() {
  const {label: unitLabel} = useUnitAdormentLabel()
  const { getValues, setValue } = useFormContext()

  const onStatorHeightChange = () => {
    const formVals = getValues()
    setValue('AIR_GAP', getAirGap(formVals))
  }

  const onRotorStatorGapChange = () => {
    const formVals = getValues()
    setValue('AIR_GAP', getAirGap(formVals))
  }


  return (
    <GridCol item>
      <GridCol item>
        <Grid item>
          <LabeLBig>Stator</LabeLBig>
        </Grid>
      </GridCol>
      <GridCol item>
        <GridRow item>
          {/* <Grid item>
            <SimpleSelect
              label="Winding Type"
              name="WINDING_TYPE"
              options={windingTypes}
              style={{width:INPUT_WIDTH}}
            />
          </Grid> */}
          <Grid item>
            <SimpleTextField
              label="Stator Height"
              name="STATOR_HEIGHT"
              InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
              style={{width:INPUT_WIDTH}}
              onChange={onStatorHeightChange}
            />
          </Grid>
          <Grid item>
            <SimpleTextField
              name="ROTOR_TO_STATOR_GAP"
              label="Rotor/Stator Air Gap"
              InputProps={{endAdornment: <InputAdornment position="end">{unitLabel}</InputAdornment>}}
              style={{width:INPUT_WIDTH}}
              onChange={onRotorStatorGapChange}
            />
          </Grid>
        </GridRow>
        <Grid item>
          <ConductorInputs />
        </Grid>
      </GridCol>
    </GridCol>
  )
}
