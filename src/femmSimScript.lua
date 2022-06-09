UNITS = "millimeters"
NUM_ROTOR_POLE_PAIRS = 3
MAGNET_GAP = 1
MAGNET_LENGTH = 1
MAGNET_WIDTH = 2
MAGNET_HEIGHT = 1
MAGNET_GRADE = "N50"
HALBACH = 1
HALBACH_LENGTH = 1
HALBACH_WIDTH = 1
HALBACH_HEIGHT = 1
HALBACH_GRADE = "N50"
BACK_IRON = 1
BACK_IRON_HEIGHT = 1
BACK_IRON_MATERIAL = "1006 Steel"
AIR_GAP = 10
STATOR = 1
STATOR_HEIGHT = 4
RECTANGLE_CONDUCTOR = 0
CONDUCTOR_GAP = 1
CONDUCTOR_WIDTH = 1
CONDUCTOR_HEIGHT = 1
CONDUCTOR_DIAMETER = 2
CONDUCTOR_MATERIAL = "32 AWG"
PEAK_CURRENT = 10
ROTOR_TO_STATOR_GAP = 1
NUM_PHASES = 3
NUM_PHASE_TURNS = 4
ANALYSIS = 0
FILEPATH = ""
FILENAME = ""

-- TODO - Allow wire gauge to overide RECTANGLE_CONDUCTOR and CONDUCTOR_DIAMETER
-- TODO - Add validation to suggest values
-- TODO - add collision detection
-- TODO - add preview using JS/CSS

-- TODO - export results somehow
  -- TODO - run a bunch of tests
-- TODO - multiple cross sections across rotor diameter
---- TODO wedge magnets

-- TODO - various winding patterns


function init() 
  -- Create Doc
  newdocument(0)
  -- Init Problem
  mi_probdef(0, UNITS, "planar", 1e-008, MAGNET_LENGTH)
  -- Init Grid
  mi_showgrid()
  mi_setgrid(0.001, "cart")

  init_materials()
  init_circuits() 
  build_objects()

  mi_zoomnatural()
  
  -- if ANALYSIS then
    -- analyze()
  -- end

end

function init_materials()
  mi_getmaterial("Air")
  mi_getmaterial(BACK_IRON_MATERIAL)
  mi_getmaterial(MAGNET_GRADE)
  if HALBACH == 1 then
    mi_getmaterial(HALBACH_GRADE)
  end

  if STATOR == 1 then
    mi_getmaterial(CONDUCTOR_MATERIAL)
  end
end

function init_circuits() 
  for i = 1, NUM_PHASES do
    local phase_label = get_phase_label(i)
    local current = get_phase_current(i)
    local circuit_type = 1 -- 1 for series 0 for parallel
    mi_addcircprop(phase_label, current, circuit_type)
  end
end

function build_objects()
  build_air_bounds()
  -- Build the sides separately
  build_rotor(0)
  build_rotor(1)
  
  if STATOR == 1 then
    build_stator()
  end

  build_analysis_nodes()
end

function get_full_filepath()
  return FILEPATH .. FILENAME
end

function get_v_gap() 
  return get_total_height() * 2
end

function get_h_gap()
  return get_total_width() * 1
end

function get_bound_height()
  return get_v_gap() * 3
end

function get_bound_width() 
  return get_h_gap() * 3
end

function get_pole_width()
  local pole_width = MAGNET_WIDTH + MAGNET_GAP
  if HALBACH == 1 then
    return pole_width + HALBACH_WIDTH + MAGNET_GAP
  end

  return pole_width
end

function is_halbach_taller() 
  return (HALBACH == 1 and MAGNET_HEIGHT < HALBACH_HEIGHT)
end

function get_tallest_magnet_height() 
  if is_halbach_taller() then
    return HALBACH_HEIGHT
  end

  return MAGNET_HEIGHT
end

function get_magnet_height_diff() 
  if HALBACH == 1 then
    return abs(MAGNET_HEIGHT - HALBACH_HEIGHT)
  end

  return 0
end

function get_total_width()
  local width = (get_non_halbach_count() - 1) * (MAGNET_WIDTH + MAGNET_GAP)
  if HALBACH == 1 then
    width = width + get_halbach_count() * (HALBACH_WIDTH + MAGNET_GAP)
  end

  return width
end

function get_total_height()
  local total_height = get_tallest_magnet_height() * 2 + AIR_GAP
  if BACK_IRON == 1 then
    return total_height + BACK_IRON_HEIGHT * 2
  end

  return total_height
end

function get_halbach_count() 
  return NUM_ROTOR_POLE_PAIRS * 2
end

function get_non_halbach_count() 
  return NUM_ROTOR_POLE_PAIRS * 2 + 1 
end

function get_total_magnet_count()
  local count = get_non_halbach_count()

  if HALBACH == 1 then
    return count + get_halbach_count()
  end

  return count
end

function get_phase_offset(phase)
  return mod(phase -1, NUM_PHASES)
end

function get_phase_current(phase)
  local angle = 360 / NUM_PHASES
  return PEAK_CURRENT * sin(rad((phase - 1) * angle))
end

function get_phase_label(phase) 
  return "Phase " .. tostring(phase)
end

-- TODO make this use a look up table for diameters based on gague selected
-- function get_coil_diameter()
--   return CONDUCTOR_DIAMETER
-- end

function get_coil_gap()
  return get_pole_width() / NUM_PHASES
end

function get_coil_offset(coil_num, phase)
  local phase_offset = get_phase_offset(phase)
  local total_offset = (coil_num * NUM_PHASES - phase_offset) * get_coil_gap() + get_pole_width() / 2
  if RECTANGLE_CONDUCTOR == 1 then
  total_offset = total_offset - CONDUCTOR_WIDTH / 2
  end
  return total_offset
end

function get_stator_pole_pairs()
  return NUM_ROTOR_POLE_PAIRS - 1
end

function get_total_coils() 
  return NUM_PHASES * get_stator_pole_pairs()
end

function get_total_phase_legs() 
  return get_stator_pole_pairs() * 2
end

function get_total_legs() 
  return get_total_coils() * 2
end

function build_air_bounds()
  print("Building air bounds")

  local x = 0
  local y = 0
  local w = get_bound_width()
  local h = get_bound_height()
  build_rect_block(x, y, w, h, "Air")
end

function build_rotor(side) 
  print("Building Rotor side " .. side)

  build_rotor_magnets(side)
  if BACK_IRON == 1 then
    local x = get_h_gap()
    local y = get_v_gap() - BACK_IRON_HEIGHT
    if side == 1 then 
      y = get_v_gap() + (ROTOR_TO_STATOR_GAP * 2) + STATOR_HEIGHT + (get_tallest_magnet_height() * 2)
    end
    build_rotor_iron(x, y)
  end
end

function get_magnet_dir(side, index) 
  local modulus = 2
  local offset = 90
  if HALBACH == 1 then
    modulus = 4
    offset = 0
  end

  local multiplier = mod(index, modulus) + 1
  if side == 1 then
    multiplier = modulus - mod(index, modulus) + 1
  end
 
  return (360 / modulus) * multiplier + offset
end

function get_y_offset(side, is_halbach) 
  local y = get_v_gap()

  -- Far side
  if side == 1 then
    y = y + (ROTOR_TO_STATOR_GAP * 2) + STATOR_HEIGHT + get_tallest_magnet_height()

    local height_diff = get_magnet_height_diff()
    if is_halbach and (not is_halbach_taller()) then
      y = y + height_diff
    end
  end

  return y
end

function get_x_offset(x, is_halbach, is_half) 
  local w = MAGNET_WIDTH
  if is_halbach then
    w = HALBACH_WIDTH
  end

  if is_half then
    w = w / 2
  end

  return x + w + MAGNET_GAP 
end

function build_rotor_magnets(side)
  print("Building Rotor side " .. side .. " magnets")
  
  local x = get_h_gap()
  local count = get_total_magnet_count()

  for i = 1, count do
    print("Building magnet " .. i)
    local is_halbach = (HALBACH == 1 and mod(i + 1, 2) == 0)
    local y = get_y_offset(side, is_halbach)

    if is_halbach then
      print("halbach: true")
    else
      print("halbach: false")
    end

    local dir = get_magnet_dir(side, i)
    print("direction: " .. dir)

    -- First or last iteration are half magnets
    local is_half = (i == 1 or i == count)
    
    build_magnet(x, y, dir, is_halbach, is_half)

    x = get_x_offset(x, is_halbach, is_half)    
  end
end

function build_magnet(x, y, dir, is_halbach, is_half)
  local w = MAGNET_WIDTH
  local h = MAGNET_HEIGHT
  local grade = MAGNET_GRADE

  if is_halbach then
    w = HALBACH_WIDTH
    h = HALBACH_HEIGHT
    grade = HALBACH_GRADE
  end

  -- End magnets are cut in half
  if is_half then
    w = w / 2
  end

  build_rect_block(x, y, w, h, grade, "", dir)
end

function build_rotor_iron(x, y)
  print("Building rotor iron")

  local w = get_total_width()
  local h = BACK_IRON_HEIGHT
  local mat = BACK_IRON_MATERIAL
  build_rect_block(x, y, w, h, mat)
end

function build_stator()
  -- A stator always has two sides
  build_stator_side(1)
  build_stator_side(2)

end

function build_stator_side(side) 
  local coil_w = get_coil_width()
  local x = get_h_gap() + ((get_total_width() - get_stator_width()) / 2)
  local turns = get_turns(side)

  -- Offset to help with centering
  x = x - coil_w / 2

  if side == 2 then
    x = x + ((coil_w + CONDUCTOR_GAP) / 2)
  end

  -- The nodes are placed at the top and bottom center of circles. use the offset to get the correct x position
  if RECTANGLE_CONDUCTOR == 0 then
    x = x + get_round_conductor_x_offset()
  end

  local y = get_v_gap() + get_tallest_magnet_height() + ROTOR_TO_STATOR_GAP
  local coil_h = get_coil_height()

  if side == 2 then
    y = y + STATOR_HEIGHT - coil_h
  end

  for i = 1, get_total_coils() do
    local phase = mod(i, 3) + 1
    local circuit = get_phase_label(phase)
    if RECTANGLE_CONDUCTOR == 1 then
      build_rect_block(x, y, coil_w, coil_h, CONDUCTOR_MATERIAL, circuit, 0, 0, turns)
    else 
      build_circle_block(x, y, coil_h, CONDUCTOR_MATERIAL, circuit, 0, 0, turns)
    end

    x = x + coil_w + CONDUCTOR_GAP
  end
end

function get_turns(side) 
  if side == 1 then
    return NUM_PHASE_TURNS
  else 
    return NUM_PHASE_TURNS * -1
  end
end

function get_stator_width() 
  local multiplier = get_total_coils()
  return (multiplier * get_coil_width()) + (multiplier - 1 * (CONDUCTOR_GAP))
end

function get_coil_height() 
  if RECTANGLE_CONDUCTOR == 1 then
    return CONDUCTOR_HEIGHT
  else 
    return CONDUCTOR_DIAMETER
  end
end

function get_coil_width() 
  if RECTANGLE_CONDUCTOR == 1 then
    return CONDUCTOR_WIDTH
  else 
    return CONDUCTOR_DIAMETER
  end
end

function get_round_conductor_x_offset() 
  return CONDUCTOR_DIAMETER / 2
end

function build_analysis_nodes() 
  local x = get_h_gap()
  local x1 = x + get_total_width()
  local y = get_v_gap() + get_tallest_magnet_height() + ROTOR_TO_STATOR_GAP + (STATOR_HEIGHT / 2)
  
  mi_addnode(x, y)
  mi_addnode(x1, y)
end

function draw_circle(x, y, h)
  local y1 = y + h

  mi_addnode(x, y)
  mi_addnode(x, y1)

  mi_addarc(x, y, x, y1, 180, 1)
  mi_addarc(x, y1, x, y, 180, 1)
end

function build_circle_block(x, y, h, material, circuit, dir, group, turns)
  draw_circle(x,y,h)

  local labelX = x
  local labelY = y + h / 2
  add_block_props(labelX, labelY, material, circuit, dir, group, turns)
end

function get_label_points(x, y, w, h, position) 
  local labelX = x + w / 2
  local labelY = y + h / 2
  if label_position == "corner" then
    labelX = x + w / 8
    labelY = y + h / 8
  end

  return {labelX,labelY}
end

function build_rect_block(x, y, w, h, material, circuit, dir, group, turns, label_position)
  print("x: " .. x .. ", y: " .. y .. ", w: " .. w .. ", h: " .. h)

  circuit = circuit or ""
  dir = dir or 0
  group = group or 0
  turns = turns or 0
  label_position = label_position or "center"

  draw_rect(x, y, w, h)

  local label_points = get_label_points(x, y, w, h, label_position)
  print("label x: " .. label_points[1] .. " label y: " .. label_points[2])
  add_block_props(label_points[1], label_points[2], material, circuit, dir, group, turns)
end

function add_block_props(labelX, labelY, material, circuit, dir, group, turns)
  mi_addblocklabel(labelX, labelY)
  mi_selectlabel(labelX, labelY)
  mi_setblockprop(material, 1, 0, circuit, dir, group, turns)
  mi_clearselected()
end

-- Given an array of paths draw the shape
-- This can be used to make complex polygons
function draw_path(path) 
  local len = getn(path)
  for i = 1, len do

    local first = i == 1
    local last = i == len

    local thisPoint = path[i]
    print("Drawing point: { x: " .. thisPoint[1] .. ", y: " .. thisPoint[2] .. " }")
    if last then
      nextPoint = path[1]
    else
      nextPoint = path[i+1]
    end

    -- Draw points and segments as needed
    if first then
      mi_addnode(thisPoint[1], thisPoint[2])
      mi_addnode(nextPoint[1], nextPoint[2])
      mi_addsegment(thisPoint[1], thisPoint[2], nextPoint[1], nextPoint[2])
    elseif last then
      mi_addsegment(thisPoint[1], thisPoint[2], nextPoint[1], nextPoint[2])
    else
      mi_addnode(nextPoint[1], nextPoint[2])
      mi_addsegment(thisPoint[1], thisPoint[2], nextPoint[1], nextPoint[2])
    end

  end -- End for

end

-- Derive rectangle path given xy starting position, length, and width 
function get_rect_path(x, y, w, h)
  local x1 = x + w
  local y1 = y + h

  return {
    {x, y},
    {x1, y},
    {x1, y1},
    {x, y1},
  }
end

-- Helper function to draw rectangle
function draw_rect(x, y, w, h) 
  local path = get_rect_path(x, y, w, h)
  draw_path(path)
end

function analyze()
  mi_saveas(get_full_filepath())
  mi_analyze()
  mi_loadsolution()
  mo_showdensityplot(1, 0, 1, 0, "bmag")
end

init()