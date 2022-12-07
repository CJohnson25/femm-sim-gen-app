import { CONSENT_COOKIE, getUnits } from "./util"
import { useCookies } from 'react-cookie'
import { useFormContext } from "react-hook-form"

export const useUnitAdormentLabel = () => {
  const {control} = useFormContext()

  const units = control._formValues.UNITS
  return getUnits(units)
}

export const useConsentCookie = () => {
  const [cookies] = useCookies([CONSENT_COOKIE])
  return cookies?.[CONSENT_COOKIE]
}