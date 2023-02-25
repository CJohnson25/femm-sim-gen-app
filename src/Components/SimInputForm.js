import React from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import { CopyScriptButton } from './CopyScriptButton'
import { RotorInputs } from '../Containers/RotorInputs'
import { GeneralInputs } from '../Containers/GeneralInputs'
import { StatorInputs } from '../Containers/StatorInputs'
import { ContainerToggle } from './ContainerToggle'
import { formInputToLuaScript, getAirGap } from '../util'
import { GridRow } from '../Containers/GridRow'
import { Grid } from '@mui/material'

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
      STATOR: 0,
      STATOR_HEIGHT: 10,
      RECTANGLE_CONDUCTOR: 0,
      CONDUCTOR_GAP: 0,
      CONDUCTOR_WIDTH: 1,
      CONDUCTOR_HEIGHT: 1,
      CONDUCTOR_DIAMETER: 2,
      CONDUCTOR_MATERIAL: '32 AWG',
      PEAK_CURRENT: 10,
      ROTOR_TO_STATOR_GAP: 1,
      NUM_PHASES: 3,
      NUM_PHASE_TURNS: 4,
      ANALYSIS: 0,
      ANALYSIS_HEIGHT: 1,
      FILEPATH: '',
      FILENAME: ''
    }
  })
  const formVals = methods.watch()

  // Generate filename
  const processFilename = (val) => {
    let filename = val
    const ignore = ['FILEPATH', 'FILENAME', 'WINDING_TYPE']
    const keys = Object.keys(formVals)
    for (const key of keys) {
      if (ignore.includes(key)) {
        continue
      }

      const fieldVal = formVals[key]
      filename += '--' + key + '-' + fieldVal 
    }

    if (filename && !filename.toLowerCase().includes('.fem')) {
      return filename + '.fem'
    }
  }

  const onStatorChange = () => {
    const formVals = methods.getValues()
    methods.setValue('AIR_GAP', getAirGap(formVals))
  }

  
  const processedVals = {
    ...formVals,
    FILENAME: processFilename(formVals.FILENAME),
    AIR_GAP: getAirGap(formVals)
  }
  
  // methods.setValue('FILENAME', processFilename(formVals.FILENAME))
  // methods.setValue('AIR_GAP', getAirGap(formVals))

  const outputText = processedVals ? formInputToLuaScript(processedVals) : ''
  // const outputText = formInputToLuaScript(formVals)

  return (
    <FormProvider {...methods} >
      <GridRow alignItems="flex-start">
        <GeneralInputs control={methods.control} />
        
        <RotorInputs control={methods.control} />
        
        <Grid container item md={4}>
          <ContainerToggle
            label="Simulate Stator?"
            name="STATOR"
            onChange={onStatorChange}
          >
            <StatorInputs control={methods.control} />
          </ContainerToggle>
        </Grid>

        <CopyScriptButton outputText={outputText} />
      </GridRow>
    </FormProvider>
  )
}
