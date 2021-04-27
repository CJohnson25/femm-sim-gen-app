import './App.css';
import 'fontsource-roboto';
import React from 'react';
import { Container, Grid, Typography, MenuItem, Button, FormControlLabel, FormControl, FormLabel, InputLabel, RadioGroup, Radio, Select, Switch, TextField } from '@material-ui/core';
import { CopyToClipboard } from './Components/CopyToClipboard.js'

function App() {
  const magnetTypes = ['N48', 'N50', 'N52']
  const defaultVals = {
    UNITS: 'millimeters',
    MAGNET_WIDTH: 0,
    MAGNET_HEIGHT: 0,
    MAGNET_GRADE: 'N50',
    HALBACH: false,
    HALBACH_WIDTH: 0,
    HALBACH_HEIGHT: 0,
    HALBACH_GRADE: 'N50',
    BACK_IRON: false,
    BACK_IRON_HEIGHT: 0,
    AIR_GAP: 0
  }

  const [formVals, setFormVals] = React.useState(defaultVals)
  const [showHalbachOptions, setShowHalbachOptions] = React.useState(defaultVals.HALBACH)
  const [showBackIronOptions, setShowBackIronOptions] = React.useState(defaultVals.BACK_IRON)
  const [outputText, setOutputText] = React.useState(generateOutputText(defaultVals))


  function getMagnetOptions () {
    return magnetTypes.map((value, i) => {
      return (
        <MenuItem key={i} value={value}>{value}</MenuItem>
      )
    })
  }

  const magnetOptions = getMagnetOptions()

  const getHalbachOptions = () => {
    return (
      <>
        <Grid item xs={4}>
          <FormControlLabel
            control={<TextField onChange={handleInputChange} name="HALBACH_WIDTH" label="Halbach Width" />}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<TextField onChange={handleInputChange} name="HALBACH_HEIGHT"  label="Halbach Height" />}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <InputLabel>Halbach Grade</InputLabel>
            <Select value={formVals.HALBACH_GRADE}>
              {magnetOptions}
            </Select>
          </FormControl>
        </Grid>
      </>
    )
  }

  const halbachOptions = getHalbachOptions()

  function handleHalbachChange(e) {
    const inputVal = e.target.checked
    formVals.HALBACH = inputVal
    if (!inputVal) {
      //formVals.HALBACH_WIDTH = 0
      //formVals.HALBACH_HEIGHT = 0
    }
    setFormVals({...formVals})
    setShowHalbachOptions(inputVal)
    setOutputText(generateOutputText(formVals))
  }

  const getBackIronOptions = () => {
    return (
      <>
        <Grid item xs={12}>
          <FormControlLabel
            control={<TextField onChange={handleInputChange} name="BACK_IRON_HEIGHT" label="Back Iron Height" />}
          />
        </Grid>
      </>
    )
  }

  const backIronOptions = getBackIronOptions()

  function handleBackIronChange(e) {
    const inputVal = e.target.checked
    formVals.BACK_IRON = inputVal
    if (!inputVal) {
      formVals.BACK_IRON_HEIGHT = 0
    }
    setFormVals({...formVals})
    setShowBackIronOptions(inputVal)
    setOutputText(generateOutputText(formVals))
  }

  function handleInputChange(e) {
    const int = parseInt(e.target.value)
    const val = int ? int : e.target.value
    formVals.[e.target.name] = val

    setFormVals({...formVals})
    setOutputText(generateOutputText(formVals))

  }

  function generateOutputText(formVals) {
    const stringifiedVals = JSON.stringify(formVals, null, 2)
    const sani = stringifiedVals.replace(/^{\n?|\n?}$/g, "")
    const sani1 = sani.replace(/"(.*)": /g, "$1 = ")
    const sani2 = sani1.replace(/,\n/g, "\n")
    const sani3 = sani2.replace(/true/g, "1")
    const sani4 = sani3.replace(/false/g, "0")
    const complete = sani4 + getProgramCode()

    return complete
  }

  function getProgramCode() {
    return `

 function init () 
  -- Create Doc
  showconsole()
  newdocument(0)

  -- Init Problem
  mi_probdef(0, UNITS, "planar", 1e-008)

  -- Init Grid
  mi_showgrid()
  mi_setgrid(0.001, "cart")

  -- Add materials
  mi_getmaterial("Air")
  mi_getmaterial(IRON_MATERIAL)
  mi_getmaterial(MAGNET_GRADE)
  if HALBACH == 1 then
    mi_getmaterial(HALBACH_GRADE)
  end

  build_objects()

  mi_zoomnatural()
end

function get_v_gap () 
  return get_total_height() * 2
end

function get_h_gap ()
  return get_total_width() * 1
end

function get_bound_height()
  return get_v_gap() * 3
end

function get_bound_width() 
  return get_h_gap() * 3
end

function get_pole_width ()
  local pole_width = MAGNET_WIDTH + MAGNET_GAP
  if HALBACH == 1 then
    pole_width = pole_width + HALBACH_WIDTH + MAGNET_GAP
  end

  return pole_width
end

function get_total_width ()
  return (get_nonhalbach_count() - 1) * (MAGNET_WIDTH + MAGNET_GAP) + get_halbach_count() * (HALBACH_WIDTH + MAGNET_GAP)
end

function get_total_height ()
  local total_height = MAGNET_HEIGHT*2 + AIR_GAP
  if BACK_IRON == 1 then
    total_height = total_height + BACK_IRON_HEIGHT*2
  end

  return total_height
end

function get_halbach_count() 
  return SIM_POLE_COUNT
end

function get_nonhalbach_count() 
  return SIM_POLE_COUNT + 1 
end

function get_total_magnet_count ()
  return get_nonhalbach_count() + get_halbach_count()
end


function build_objects ()
  build_air_bounds()
  -- Build the sides separately
  build_rotor(0)
  build_rotor(1)
  build_analysis_nodes()
end

function build_air_bounds()
  build_block(0, 0, get_bound_width() , get_bound_height(), "Air", "corner", 0)
end

function build_rotor(side) 
  build_rotor_magnets(side)
  if BACK_IRON == 1 then
    local x = get_h_gap()
    local y = get_v_gap() - BACK_IRON_HEIGHT
    if side == 1 then 
      y = get_v_gap() + MAGNET_HEIGHT*4
    end
    build_rotor_iron(x, y, BACK_IRON_HEIGHT, '1006 Steel')
  end
end

function build_rotor_magnets (side)
  local count = get_total_magnet_count()
  
  local modulus = 2
  if HALBACH == 1 then 
    modulus = 4
  end
  
  local current_offset = get_h_gap()
  local y = get_v_gap()
  if (side == 1) then
    y = get_v_gap() + MAGNET_HEIGHT*3
  end

  for i = 0, count - 1 do
    local direction = (360/modulus) * (mod(i, modulus) + 1)
    if (side == 1) then
      direction =  (360/modulus) * (modulus - mod(i, modulus) + 1)
    end
    local is_halbach = 0
    local is_end = 0
    local width = MAGNET_WIDTH

    -- If iterating Halbach and If current iteration is halbach magnet
    if HALBACH == 1 and mod(i, 2) == 1 then
      is_halbach = 1
      width = HALBACH_WIDTH
    end

    -- First or last iteration are half magnets
    if i == 0 or i == count - 1 then
      is_end = 1
      width = width/2
    end

    build_magnet(current_offset, y, direction, is_halbach, is_end)
    current_offset = current_offset + width + MAGNET_GAP
  end
end

function build_magnet (x, y, direction, is_halbach, is_end)
  local w = MAGNET_WIDTH
  local h = MAGNET_HEIGHT
  local grade = MAGNET_GRADE

  if is_halbach == 1 then
    w = HALBACH_WIDTH
    h = HALBACH_HEIGHT
    grade = HALBACH_GRADE
  end 

  if is_end == 1 then
    w = w/2
  end

  build_block(x, y, w, h, grade, "center", direction)
end


function build_rotor_iron (x, y)
  build_block(x, y, get_total_width(), BACK_IRON_HEIGHT, IRON_MATERIAL, center, 0)
end

function build_block(x, y, w, h, material, label_position, direction)
  local x1 = x + w
  local y1 = y + h

  mi_addnode(x, y)
  mi_addnode(x1, y)
  mi_addnode(x, y1)
  mi_addnode(x1, y1)

  mi_addsegment(x, y, x1, y)
  mi_addsegment(x1, y, x1, y1)
  mi_addsegment(x, y1, x1, y1)
  mi_addsegment(x, y1, x, y)

  local labelX = x + w/2
  local labelY = y + h/2
  if (label_position == "corner") then
    labelX = x + w/8
    labelY = y + h/8
  end
  mi_addblocklabel(labelX, labelY)
  mi_selectlabel(labelX, labelY)
  mi_setblockprop(material, 1, 0,"", direction)
  mi_clearselected()
end

function build_analysis_nodes () 
  local x = get_h_gap()
  local x1 = x + get_total_width()
  local y = get_v_gap() + MAGNET_HEIGHT*2
  
  mi_addnode(x, y)
  mi_addnode(x1, y)
end

function analyze_problem ()
  
end

init()
    `
  }

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
              <RadioGroup aria-label="units" onChange={handleInputChange} name="UNITS" value={formVals.UNITS} >
                <FormControlLabel value="millimeters" control={<Radio />} label="Millimeters" />
                <FormControlLabel value="inches" control={<Radio />} label="Inches" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControlLabel
              control={<TextField onChange={handleInputChange} name="MAGNET_WIDTH" label="Magnet Width" />}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={<TextField onChange={handleInputChange} name="MAGNET_HEIGHT" label="Magnet Height" />}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl>
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
              label="Yes"
            />
          </Grid>

          {showHalbachOptions ? halbachOptions : null}

          <Grid item xs={12}>
            <FormLabel component="legend">Back Iron?</FormLabel>
            <FormControlLabel
              control={<Switch value={formVals.backIron} onChange={handleBackIronChange} name="BACK_IRON" />}
              label="Yes"
            />
          </Grid>

          {showBackIronOptions ? backIronOptions : null}

          <Grid item xs={12}>
            <FormControlLabel
              control={<TextField onChange={handleInputChange} name="AIR_GAP" label="Air Gap" />}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} item xs={12}>
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
      </Container>
    </div>
  );
}

export default App;
