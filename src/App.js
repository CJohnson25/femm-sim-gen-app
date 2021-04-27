import './App.css';
import 'fontsource-roboto';
import React from 'react';
import { Container, Grid, Typography, MenuItem, FormControlLabel, FormControl, FormLabel, InputLabel, RadioGroup, Radio, Select, Switch, TextField } from '@material-ui/core';

function App() {
  const defaultVals = {
    units: 'millimeters',
    magnetWidth: 0,
    magnetHeight: 0,
    magnetGrade: 'N50',
    halbach: false,
    halbachWidth: 0,
    halbachHeight: 0,
    halbachGrade: 'N50',
    backIron: false,
    backIronHeight: 0,
    airGap: 0
  }

  const [formVals, setFormVals] = React.useState(defaultVals)
  const [showHalbachOptions, setShowHalbachOptions] = React.useState(defaultVals.halbach)
  const [showBackIronOptions, setShowBackIronOptions] = React.useState(defaultVals.backIron)

  const HalbachOptions = () => {
    return (
      <>
        <Grid item xs={4}>
          <FormControlLabel
            control={<TextField label="Halbach Width" />}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<TextField label="Halbach Height" />}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <InputLabel>Halbach Grade</InputLabel>
            <Select value={formVals.halbachGrade}>
              <MenuItem value="N48">N48</MenuItem>
              <MenuItem value="N50">N50</MenuItem>
              <MenuItem value="N52">N52</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </>
    )
  }


  function handleHalbachChange(e) {
    const inputVal = e.target.checked
    formVals.halbach = inputVal
    if (!inputVal) {
      formVals.halbach_width = 0
    }
    setFormVals({...formVals})
    setShowHalbachOptions(inputVal)
  }


  const BackIronOptions = () => {
    return (
      <>
        <Grid item xs={12}>
          <FormControlLabel
            control={<TextField label="Back Iron Height" />}
          />
        </Grid>
      </>
    )
  }


  function handleBackIronChange(e) {
    const inputVal = e.target.checked
    formVals.backIron = inputVal
    if (!inputVal) {
      formVals.backIronHeight = 0
    }
    setFormVals({...formVals})
    setShowBackIronOptions(inputVal)
  }


  function handleInputChange(e) {
    const newFormVals = formVals
    newFormVals.[e.target.name] = e.target.value
    setFormVals({...newFormVals})
  }

console.log(formVals)


  return (
    <div className="App">
      <Container maxWidth="sm">
        <Grid container item spacing={2} xs={10}>
          <Grid item xs={12}>
            <h1>FEMM Simulation Generator</h1>
          </Grid>
          <Grid item xs={12}>
            <Typography>This form will produce a LUA script that can then be run in FEMM to product a simulation</Typography>
          </Grid>

          <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Units</FormLabel>
              <RadioGroup aria-label="units" onChange={handleInputChange} name="units" value={formVals.units} >
                <FormControlLabel value="millimeters" control={<Radio />} label="Millimeters" />
                <FormControlLabel value="inches" control={<Radio />} label="Inches" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControlLabel
              control={<TextField onChange={handleInputChange} name="magnetWidth" label="Magnet Width" />}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={<TextField onChange={handleInputChange} name="magnetHeight" label="Magnet Height" />}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <InputLabel>Magnet Grade</InputLabel>
              <Select onChange={handleInputChange} name="magnetGrade" value={formVals.magnetGrade}>
                <MenuItem value="N48">N48</MenuItem>
                <MenuItem value="N50">N50</MenuItem>
                <MenuItem value="N52">N52</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormLabel component="legend">Halbach?</FormLabel>
            <FormControlLabel
              control={<Switch value={formVals.halbach} onChange={handleHalbachChange} name="halbach" />}
              label="Yes"
            />
          </Grid>

          {showHalbachOptions ? <HalbachOptions/> : null}

          <Grid item xs={12}>
            <FormLabel component="legend">Back Iron?</FormLabel>
            <FormControlLabel
              control={<Switch value={formVals.backIron} onChange={handleBackIronChange} name="backIron" />}
              label="Yes"
            />
          </Grid>

          {showBackIronOptions ? <BackIronOptions/> : null}

          <Grid item xs={12}>
            <FormControlLabel
              control={<TextField onChange={handleInputChange} name="airGap" label="Air Gap" />}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
