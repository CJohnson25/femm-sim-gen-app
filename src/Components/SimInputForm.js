import React from 'react'
import { Grid, Typography, Card, CardContent } from '@mui/material'
import { CopyScriptButton } from './CopyScriptButton'
import { formInputToLuaScript } from '../util'
import { useForm } from 'react-hook-form'
import { RotorInputs } from '../Containers/RotorInputs'
import { GeneralInputs } from '../Containers/GeneralInputs'
import { StatorInputs } from '../Containers/StatorInputs'

export function SimInputForm() {
  // const stringInputFields = [
  //   'MAGNET_GRADE',
  //   'HALBACH_GRADE',
  //   'BACK_IRON_MATERIAL',
  //   'CONDUCTOR_MATERIAL',
  //   'FILEPATH',
  //   'FILENAME'
  // ]

  const { control, watch } = useForm({
    defaultValues: {
      UNITS: 'millimeters',
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
  const formVals = watch()
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
    <Grid container spacing={5}>
      <Grid item xs={12} container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h2">Motor Sim Generator</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>
            This form will generate a LUA script that can then be run in FEMM to
            produce a 2D simulation of a 3 phase air-cored toroidially wound
            axial flux permanant magnet motor.
          </Typography>
          <Typography>
            This is still a work in progress and will hopefully support other
            motor architechtures in the future.
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={4}>
        <GeneralInputs control={control} />
      </Grid>

      <Grid item xs={12} lg={4}>
        <RotorInputs control={control} />
      </Grid>

      <Grid item xs={12} lg={4}>
        <StatorInputs control={control} />
      </Grid>

      <Grid item xs={12}>
        <CopyScriptButton outputText={outputText} />
      </Grid>
    </Grid>
  )
}
