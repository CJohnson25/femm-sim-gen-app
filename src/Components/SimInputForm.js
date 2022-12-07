import React from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import { Grid } from '@mui/material'

import { CopyScriptButton } from './CopyScriptButton'
import { RotorInputs } from '../Containers/RotorInputs'
import { GeneralInputs } from '../Containers/GeneralInputs'
import { StatorInputs } from '../Containers/StatorInputs'
import { ContainerToggle } from './ContainerToggle'
import { formInputToLuaScript } from '../util'

export function SimInputForm() {
  // const stringInputFields = [
  //   'MAGNET_GRADE',
  //   'HALBACH_GRADE',
  //   'BACK_IRON_MATERIAL',
  //   'CONDUCTOR_MATERIAL',
  //   'FILEPATH',
  //   'FILENAME'
  // ]

  const methods = useForm({
    defaultValues: {
      UNITS: 'millimeters',
      NUM_ROTORS: 2,
      NUM_ROTOR_POLE_PAIRS: 3,
      MAGNET_GAP: 1,
      MAGNET_LENGTH: 1,
      MAGNET_WIDTH: 1,
      MAGNET_HEIGHT: 1,
      MAGNET_GRADE: 'N50',
      HALBACH: 0,
      HALBACH_LENGTH: 1,
      HALBACH_WIDTH: 1,
      HALBACH_HEIGHT: 1,
      HALBACH_GRADE: 'N50',
      BACK_IRON: 0,
      BACK_IRON_HEIGHT: 1,
      BACK_IRON_MATERIAL: '1006 Steel',
      AIR_GAP: 10,
      STATOR: 1,
      RECTANGLE_CONDUCTOR: 0,
      CONDUCTOR_WIDTH: 1,
      CONDUCTOR_HEIGHT: 1,
      CONDUCTOR_DIAMETER: 2,
      CONDUCTOR_MATERIAL: '32 AWG',
      PEAK_CURRENT: 10,
      ROTOR_TO_STATOR_GAP: 1,
      NUM_PHASES: 3,
      NUM_PHASE_TURNS: 4,
      ANALYSIS: 0,
      FILEPATH: '',
      FILENAME: ''
    }
  })
  const formVals = methods.watch()
  const outputText = formVals ? formInputToLuaScript(formVals) : ''

  // function handleInputChange(e) {
  //   const val = e.target.value
  //   const isStringInputField = stringInputFields.includes(e.target.name)
  //   const validNumInput = val.match(/^[0-9]+$|^[0-9]+\.[0-9]*$/)

  //   if (isStringInputField) {
  //     formVals[e.target.name] = val
  //     setFormVals({ ...formVals })
  //     setOutputText(formInputToLuaScript(formVals))
  //   }
  //   if (validNumInput) {
  //     let valToSave = parseFloat(val)
  //     if (val.match(/\.$/)) {
  //       valToSave = val
  //     }

  //     formVals[e.target.name] = valToSave
  //     setFormVals({ ...formVals })
  //     setOutputText(formInputToLuaScript(formVals))
  //   }
  // }

  return (
    <FormProvider {...methods} >
      <Grid item container spacing={5}>
        <Grid item xs={12} lg={4}>
          <GeneralInputs control={methods.control} />
        </Grid>

        <Grid item xs={12} lg={4}>
          <RotorInputs control={methods.control} />
        </Grid>

        <Grid item xs={12} lg={4}>
          <ContainerToggle
            label="Simulate Stator?"
            name="STATOR"
          >
            <StatorInputs control={methods.control} />
          </ContainerToggle>
        </Grid>

        <Grid item xs={12}>
          <CopyScriptButton outputText={outputText} />
        </Grid>
      </Grid>
    </FormProvider>
  )
}
