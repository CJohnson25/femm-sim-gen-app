export const femmSimScript = `
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
    return pole_width + HALBACH_WIDTH + MAGNET_GAP
  end

  return pole_width
end

function is_halbach_taller() 
  if HALBACH == 1 then
    if MAGNET_HEIGHT < HALBACH_HEIGHT then
      return 1
    end
  end

  return 0
end

function get_tallest_magnet_height() 
  if is_halbach_taller() == 1 then
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

function get_total_width ()
  local width = (get_nonhalbach_count() - 1) * (MAGNET_WIDTH + MAGNET_GAP)

  if HALBACH == 1 then
    return width + get_halbach_count() * (HALBACH_WIDTH + MAGNET_GAP)
  end

  return width
end

function get_total_height ()
  local total_height = get_tallest_magnet_height() * 2 + AIR_GAP
  if BACK_IRON == 1 then
    return total_height + BACK_IRON_HEIGHT * 2
  end

  return total_height
end

function get_halbach_count() 
  return POLE_COUNT
end

function get_nonhalbach_count() 
  return POLE_COUNT + 1 
end

function get_total_magnet_count ()
  local count = get_nonhalbach_count()

  if HALBACH == 1 then
    return count + get_halbach_count()
  end

  return count
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
      y = get_v_gap() + AIR_GAP + get_tallest_magnet_height() * 2
    end
    build_rotor_iron(x, y)
  end
end

function build_rotor_magnets (side)
  local count = get_total_magnet_count()
  
  local modulus = 2
  if HALBACH == 1 then 
    modulus = 4
  end
  
  -- init horizontal offset at h gap
  local current_x_offset = get_h_gap()
  -- init horizontal offset at v gap. Add gap for the other side
  local y_offset = get_v_gap()

  local offset = 90
  if HALBACH == 1 then
    offset = 0
  end

  for i = 0, count - 1 do
    local direction = (360/modulus) * (mod(i, modulus) + 1) + offset
    if side == 1 then
      direction =  (360/modulus) * (modulus - mod(i, modulus) + 1) + offset
    end

    local is_halbach = 0
    local is_end = 0
    local width = MAGNET_WIDTH
    local current_y_offset = y_offset
    if side == 1 then
      current_y_offset = current_y_offset + AIR_GAP + get_tallest_magnet_height()
    end
    local height_diff = get_magnet_height_diff(

    -- If iterating Halbach and If current iteration is halbach magnet
    if HALBACH == 1 and mod(i, 2) == 1 then
      is_halbach = 1
      width = HALBACH_WIDTH
      if side == 1 then
        if not is_halbach_taller() then
          current_y_offset = current_y_offset + height_diff
        end
      end
    else
      if side == 1 then
        if is_halbach_taller() then
          current_y_offset = current_y_offset + height_diff
        end
      end
    end

    -- First or last iteration are half magnets
    if i == 0 or i == count - 1 then
      is_end = 1
      width = width/2
    end

    build_magnet(current_x_offset, current_y_offset, direction, is_halbach, is_end)
    current_x_offset = current_x_offset + width + MAGNET_GAP
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
  local y = get_v_gap() + AIR_GAP/2 + MAGNET_HEIGHT
  
  mi_addnode(x, y)
  mi_addnode(x1, y)
end

function analyze_problem ()
  
end

init()
`
