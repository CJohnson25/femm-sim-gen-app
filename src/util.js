import { femmSimScript } from './femmSimScript'

export function formInputToLuaScript(formVals) {
  const stringifiedVals = JSON.stringify(formVals, null, 2)
  const sani = stringifiedVals.replace(/^{\n?|\n?}$/g, "")
  const sani1 = sani.replace(/"(.*)": /g, "$1 = ")
  const sani2 = sani1.replace(/,\n/g, "\n")
  const complete = sani2 + femmSimScript

  return complete
}