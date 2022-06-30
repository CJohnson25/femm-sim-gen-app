import { getUnits } from "./util"

export const useUnitAdormentLabel = (control) => {
  const units = control._formValues.UNITS
  return getUnits(units)
}