import React from 'react';
import { Grid, Typography, MenuItem, Button, FormControlLabel, FormControl, FormLabel, InputLabel, RadioGroup, Radio, Select, Switch, TextField } from '@material-ui/core';
import { CopyToClipboard } from './CopyToClipboard'
import { formInputToLuaScript } from '../util'


export function SimInputForm() {
  const magnetTypes = ['N30', 'N33', 'N35', 'N38', 'N40', 'N42', 'N45', 'N48', 'N50', 'N52', 'N55']
  const ironTypes = ['1006 Steel', '1010 Steel', '1018 Steel', '1020 Steel', '1117 Steel']
  const stringInputFields = ['MAGNET_GRADE', 'HALBACH_GRADE', 'IRON_MATERIAL']

  const defaultVals = {
    UNITS: 'millimeters',
    MAGNET_WIDTH: 1,
    MAGNET_HEIGHT: 1,
    MAGNET_GRADE: 'N50',
    HALBACH: 0,
    HALBACH_WIDTH: 1,
    HALBACH_HEIGHT: 1,
    HALBACH_GRADE: 'N50',
    BACK_IRON: 0,
    BACK_IRON_HEIGHT: 1,
    IRON_MATERIAL: "1006 Steel",
    POLE_COUNT: 5,
    AIR_GAP: 1,
    MAGNET_GAP: 0
  }

  const [formVals, setFormVals] = React.useState(defaultVals)
  const [showHalbachOptions, setShowHalbachOptions] = React.useState(defaultVals.HALBACH)
  const [showBackIronOptions, setShowBackIronOptions] = React.useState(defaultVals.BACK_IRON)
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
        <Grid item xs={4}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.HALBACH_WIDTH} name="HALBACH_WIDTH" label="Halbach Width" />}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.HALBACH_HEIGHT} name="HALBACH_HEIGHT" label="Halbach Height" />}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Halbach Grade</InputLabel>
            <Select onChange={handleInputChange} name="HALBACH_GRADE" value={formVals.HALBACH_GRADE}>
              {magnetOptions}
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
              <Select onChange={handleInputChange} name="IRON_MATERIAL" value={formVals.IRON_MATERIAL}>
              {ironOptions}
            </Select>
          </FormControl>
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

  function handleInputChange(e) {
    const val = e.target.value
    const isStringInputField = stringInputFields.includes(e.target.name)
    const validNumInput = val.match(/^[0-9]+$|^[0-9]+\.[0-9]*$/)

    if (isStringInputField || validNumInput) {
      formVals[e.target.name] = val
    }
    if (validNumInput) {
      formVals[e.target.name] = parseFloat(val)
    }

    setFormVals({ ...formVals })
    setOutputText(formInputToLuaScript(formVals))
  }

  const magnetOptions = createMenuItemList(magnetTypes)
  const ironOptions = createMenuItemList(ironTypes)
  const halbachOptions = getHalbachOptions()
  const backIronOptions = getBackIronOptions()

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Air Core Axial Flux PM motor</h1>
          <h2>FEMM Simulation Generator</h2>
        </Grid>
        <Grid item xs={12}>
          <Typography>This form will generate a LUA script that can then be run in FEMM to produce a 2D simulation of an air-cored axial flux permanant magnet motor.</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Units</FormLabel>
            <RadioGroup row aria-label="units" onChange={handleInputChange} name="UNITS" value={formVals.UNITS} >
              <FormControlLabel value="millimeters" control={<Radio />} label="Millimeters" />
              <FormControlLabel value="inches" control={<Radio />} label="Inches" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.MAGNET_WIDTH} name="MAGNET_WIDTH" label="Magnet Width" />}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.MAGNET_HEIGHT} name="MAGNET_HEIGHT" label="Magnet Height" />}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Magnet Grade</InputLabel>
            <Select onChange={handleInputChange} name="MAGNET_GRADE" value={formVals.MAGNET_GRADE}>
             {magnetOptions}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormLabel component="legend">Halbach?</FormLabel>
          <FormControlLabel
            control={<Switch value={formVals.halbach} onChange={handleHalbachChange} name="HALBACH" />}
            label={!showHalbachOptions ? "No" : "Yes"}
          />
        </Grid>

        {showHalbachOptions ? halbachOptions : null}

        <Grid item xs={12}>
          <FormLabel component="legend">Back Iron?</FormLabel>
          <FormControlLabel
            control={<Switch value={formVals.backIron} onChange={handleBackIronChange} name="BACK_IRON" />}
            label={!showBackIronOptions ? "No" : "Yes"}
          />
        </Grid>

        {showBackIronOptions ? backIronOptions : null}

        <Grid item xs={4}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.POLE_COUNT} name="POLE_COUNT" label="Pole Count" />}
          />
        </Grid>

        <Grid item xs={4}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.AIR_GAP} name="AIR_GAP" label="Air Gap" />}
          />
        </Grid>

        <Grid item xs={4}>
          <FormControlLabel
            filled="true"
            control={<TextField onChange={handleInputChange} value={formVals.MAGNET_GAP} name="MAGNET_GAP" label="Magnet Spacing" />}
          />
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