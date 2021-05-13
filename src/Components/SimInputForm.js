import React from 'react';
import { Grid, Typography, MenuItem, Button, Card, CardContent, FormControlLabel, FormControl, FormLabel, InputLabel, RadioGroup, Radio, Select, Switch, TextField } from '@material-ui/core';
import { CopyToClipboard } from './CopyToClipboard'
import { formInputToLuaScript, detectOs } from '../util'


export function SimInputForm() {
  const magnetTypes = ['N30', 'N33', 'N35', 'N38', 'N40', 'N42', 'N45', 'N48', 'N50', 'N52', 'N55']
  const ironTypes = ['1006 Steel', '1010 Steel', '1018 Steel', '1020 Steel', '1117 Steel']
  const conductorTypes = ['10 AWG', '12 AWG', '14 AWG', '16 AWG', '18 AWG', '20 AWG', '22 AWG', '24 AWG', '26 AWG', '28 AWG', '30 AWG', '32 AWG', '34 AWG', '36 AWG']
  const stringInputFields = ['MAGNET_GRADE', 'HALBACH_GRADE', 'BACK_IRON_MATERIAL', 'CONDUCTOR_MATERIAL', 'FILEPATH', 'FILENAME']

  const defaultVals = {
    UNITS: 'millimeters',
    NUM_ROTOR_POLE_PAIRS: 3,
    MAGNET_GAP: 1,
    MAGNET_LENGTH: 1,
    MAGNET_WIDTH: 1,
    MAGNET_HEIGHT: 1,
    MAGNET_GRADE: 'N50',
    HALBACH: 0,
    HALBACH_WIDTH: 1,
    HALBACH_HEIGHT: 1,
    HALBACH_GRADE: 'N50',
    BACK_IRON: 0,
    BACK_IRON_HEIGHT: 1,
    BACK_IRON_MATERIAL: '1006 Steel',
    AIR_GAP: 10,
    STATOR: 1,
    CONDUCTOR_DIAMETER: 2,
    CONDUCTOR_MATERIAL: '32 AWG',
    PEAK_CURRENT: 10,
    ROTOR_TO_STATOR_GAP: 1,
    NUM_PHASES: 3,
    NUM_PHASE_TURNS: 4,
    ANALYSIS: 0,
    FILEPATH: '',
    FILENAME: '',
  }

  const [formVals, setFormVals] = React.useState(defaultVals)
  const [showHalbachOptions, setShowHalbachOptions] = React.useState(defaultVals.HALBACH)
  const [showBackIronOptions, setShowBackIronOptions] = React.useState(defaultVals.BACK_IRON)
  // const [showConductorOptions, setShowConductorOptions] = React.useState(defaultVals.STATOR)
  const [showAnalysisOptions, setShowAnalysisOptions] = React.useState(defaultVals.ANALYSIS)
  const [outputText, setOutputText] = React.useState(formInputToLuaScript(defaultVals))

  function createMenuItemList(listItems) {

    return listItems.map((value, i) => {
      return (
        <MenuItem key={i} value={value}>{value}</MenuItem>
      )
    })
  }

  const getHalbachOptions = () => {
    return (
      <>
        <Grid item xs={6}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.HALBACH_WIDTH} name="HALBACH_WIDTH" label="Halbach Width" />}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.HALBACH_HEIGHT} name="HALBACH_HEIGHT" label="Halbach Height" />}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Halbach Grade</InputLabel>
            <Select onChange={handleInputChange} name="HALBACH_GRADE" value={formVals.HALBACH_GRADE}>
              {magnetTypeOptions}
            </Select>
          </FormControl>
        </Grid>
      </>
    )
  }

  const getBackIronOptions = () => {
    return (
      <>
        <Grid item xs={6}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.BACK_IRON_HEIGHT} name="BACK_IRON_HEIGHT" label="Back Iron Height" />}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>Iron Material
              <Select onChange={handleInputChange} name="BACK_IRON_MATERIAL" value={formVals.BACK_IRON_MATERIAL}>
              {ironTypeOptions}
            </Select>
          </FormControl>
        </Grid>
      </>
    )
  }

  const getConductorOptions = () => {
    return (
      <>
        <Grid item xs={12} >
          <Typography>Currently this will only simulate 3 phase designs wiith overlapped windings.</Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.CONDUCTOR_DIAMETER} name="CONDUCTOR_DIAMETER" label="Conductor Diameter" />}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>Conductor Material
              <Select onChange={handleInputChange} name="CONDUCTOR_MATERIAL" value={formVals.CONDUCTOR_MATERIAL}>
              {conductorTypeOptions}
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item xs={6}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.NUM_PHASES} name="NUM_PHASES" label="# of Phases" />}
          />
        </Grid> */}
        {/* <Grid item xs={6}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.NUM_STATOR_POLE_PAIR} name="NUM_STATOR_POLE_PAIR" label="# of Coils per Phase" />}
          />
        </Grid> */}
        <Grid item xs={6}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.NUM_PHASE_TURNS} name="NUM_PHASE_TURNS" label="# of Turns per Phase" />}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.ROTOR_TO_STATOR_GAP} name="ROTOR_TO_STATOR_GAP" label="Rotor to Stator Air Gap" />}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.PEAK_CURRENT} name="PEAK_CURRENT" label="Peak Current" />}
          />
        </Grid>

      </>
    )
  }

  const getAnalysisOptions = () => {
    return (
      <>
        <Grid item xs={12}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.FILEPATH} name="FILEPATH" label="File Path" helperText="Must have a trailing slash. If using windows this must begin with a drive letter and contain trailing backslashe. for example (C:\path\to\save\)" />}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.FILENAME} name="FILENAME" label="File Name" helperText="This must end in '.fem'" />}
          />
        </Grid>
      </>
    )
  }

  function handleHalbachChange(e) {
    const inputVal = e.target.checked ? 1 : 0
    formVals.HALBACH = inputVal

    setFormVals({ ...formVals })
    setShowHalbachOptions(inputVal)
    setOutputText(formInputToLuaScript(formVals))
  }

  function handleBackIronChange(e) {
    const inputVal = e.target.checked ? 1 : 0
    formVals.BACK_IRON = inputVal

    setFormVals({ ...formVals })
    setShowBackIronOptions(inputVal)
    setOutputText(formInputToLuaScript(formVals))
  }

  // function handleConductorChange(e) {
  //   const inputVal = e.target.checked ? 1 : 0
  //   formVals.STATOR = inputVal

  //   setFormVals({ ...formVals })
  //   setShowConductorOptions(inputVal)
  //   setOutputText(formInputToLuaScript(formVals))
  // }

  function handleAnalysisChange(e) {
    const inputVal = e.target.checked ? 1 : 0
    formVals.ANALYSIS = inputVal

    setFormVals({ ...formVals })
    setShowAnalysisOptions(inputVal)
    setOutputText(formInputToLuaScript(formVals))
  }

  function handleInputChange(e) {
    const val = e.target.value
    const isStringInputField = stringInputFields.includes(e.target.name)
    const validNumInput = val.match(/^[0-9]+$|^[0-9]+\.[0-9]*$/)

    if (isStringInputField) {
      formVals[e.target.name] = val
      setFormVals({ ...formVals })
      setOutputText(formInputToLuaScript(formVals))
    }
    if (validNumInput) {
      let valToSave = parseFloat(val)
      if (val.match(/\.$/)) {
        valToSave = val
      }

      formVals[e.target.name] = valToSave
      setFormVals({ ...formVals })
      setOutputText(formInputToLuaScript(formVals))
    }

  }

  const magnetTypeOptions = createMenuItemList(magnetTypes)
  const ironTypeOptions = createMenuItemList(ironTypes)
  const conductorTypeOptions = createMenuItemList(conductorTypes)
  const halbachOptions = getHalbachOptions()
  const backIronOptions = getBackIronOptions()
  const conductorOptions = getConductorOptions()
  const analysisOptions = getAnalysisOptions()

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h2'>Motor Sim Generator</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>This form will generate a LUA script that can then be run in FEMM to produce a 2D simulation of a 3 phase air-cored toroidially wound axial flux permanant magnet motor.</Typography>
          <Typography>This is still a work in progress and will hopefully support other motor architechtures in the future.</Typography>
        </Grid>
      </Grid>


      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
              <Grid container spacing={4} >
                <Grid item xs={12}>
                  <Typography variant='h2'>
                    General
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Units</FormLabel>
                    <RadioGroup row aria-label="units" onChange={handleInputChange} name="UNITS" value={formVals.UNITS} >
                      <FormControlLabel value="millimeters" control={<Radio />} label="Millimeters" />
                      <FormControlLabel value="inches" control={<Radio />} label="Inches" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormLabel component="legend">Auto run analysis?</FormLabel>
                  <FormControlLabel
                    control={<Switch value={formVals.ANALYSIS} onChange={handleAnalysisChange} name="ANALYSIS" />}
                    label={!showAnalysisOptions ? "No" : "Yes"}
                  />
                </Grid>
                {showAnalysisOptions ? analysisOptions : null}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant='h2'>
                    Rotor
                </Typography>
                </Grid>

                <Grid item xs={6}>
                  <FormControlLabel
                    filled="true"
                    control={<TextField onChange={handleInputChange} value={formVals.AIR_GAP} name="AIR_GAP" label="Air Gap" />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    filled="true"
                    control={<TextField onChange={handleInputChange} value={formVals.MAGNET_GAP} name="MAGNET_GAP" label="Magnet Spacing" />}
                  />
                </Grid>
                {/* <Grid item xs={4}>
                <FormControlLabel
                  filled="true"
                  control={<TextField onChange={handleInputChange} value={formVals.NUM_ROTOR_POLE_PAIRS} name="NUM_ROTOR_POLE_PAIRS" label="Pole Count" />}
                />
              </Grid> */}
                <Grid item xs={6}>
                  <FormControlLabel
                    filled="true"
                    control={<TextField onChange={handleInputChange} value={formVals.NUM_ROTOR_POLE_PAIRS} name="NUM_ROTOR_POLE_PAIRS" label="# of Pole Pairs" />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    filled="true"
                    control={<TextField onChange={handleInputChange} value={formVals.MAGNET_WIDTH} name="MAGNET_WIDTH" label="Magnet Width" />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    filled="true"
                    control={<TextField onChange={handleInputChange} value={formVals.MAGNET_HEIGHT} name="MAGNET_HEIGHT" label="Magnet Height" />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Magnet Grade</InputLabel>
                    <Select onChange={handleInputChange} name="MAGNET_GRADE" value={formVals.MAGNET_GRADE}>
                      {magnetTypeOptions}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormLabel component="legend">Halbach?</FormLabel>
                  <FormControlLabel
                    control={<Switch value={formVals.HALBACH} onChange={handleHalbachChange} name="HALBACH" />}
                    label={!showHalbachOptions ? "No" : "Yes"}
                  />
                </Grid>
                {showHalbachOptions ? halbachOptions : null}

                <Grid item xs={12}>
                  <FormLabel component="legend">Back Iron?</FormLabel>
                  <FormControlLabel
                    control={<Switch value={formVals.BACK_IRON} onChange={handleBackIronChange} name="BACK_IRON" />}
                    label={!showBackIronOptions ? "No" : "Yes"}
                  />
                </Grid>
                {showBackIronOptions ? backIronOptions : null}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
              <Grid container spacing={4} >
                <Grid item xs={12}>
                  <Typography variant='h2'>
                    Stator
                  </Typography>
                </Grid>
                {/* <Grid item xs={12}>
                  <FormLabel component="legend">Simulate Stator?</FormLabel>
                  <FormControlLabel
                    control={<Switch value={formVals.STATOR} onChange={handleConductorChange} name="STATOR" />}
                    label={!showConductorOptions ? "No" : "Yes"}
                  />
                </Grid> */}
                {conductorOptions}
              </Grid>
            </CardContent>
          </Card>
        </Grid>



      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2>Output:</h2>
          <Typography>Copy this LUA script and paste it in the LUA console in your FEMM program.</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth multiline rows={20} rowsMax={20} value={outputText} />
        </Grid>
        <Grid item xs={12}>
          <CopyToClipboard>
            {({ copy }) => (
              <Button
                variant="contained"
                color="primary"
                onClick={() => copy(outputText)}
              >
                Copy
              </Button>
            )}
          </CopyToClipboard>
        </Grid>
      </Grid>
    </>
  )
}