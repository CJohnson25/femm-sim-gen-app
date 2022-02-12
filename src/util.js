import { femmSimScript } from './femmSimScript'

export function formInputToLuaScript(formVals) {
  const stringifiedVals = JSON.stringify(formVals, null, 2)
  const sani = stringifiedVals.replace(/^{\n?|\n?}$/g, '')
  const sani1 = sani.replace(/"(.*)": /g, '$1 = ')
  const sani2 = sani1.replace(/,\n/g, '\n')
  const complete = sani2 + femmSimScript

  return complete
}

// export function detectOs() {
//   var detectOS = ''

//   if (navigator.appVersion.indexOf('Win') !== -1) {
//     detectOS = 'windows'
//   }

//   if (navigator.appVersion.indexOf('Mac') !== -1) {
//     detectOS = 'mac'
//   }

//   if (navigator.appVersion.indexOf('Linux') !== -1) {
//     detectOS = 'linux'
//   }
// }

export const unitTypes = ['millimeters', 'inches']
export const magnetTypes = [
  'N30',
  'N33',
  'N35',
  'N38',
  'N40',
  'N42',
  'N45',
  'N48',
  'N50',
  'N52',
  'N55'
]

export const ironTypes = [
  '1006 Steel',
  '1010 Steel',
  '1018 Steel',
  '1020 Steel',
  '1117 Steel'
]

export const wireGauges = [
  '10 AWG',
  '12 AWG',
  '14 AWG',
  '16 AWG',
  '18 AWG',
  '20 AWG',
  '22 AWG',
  '24 AWG',
  '26 AWG',
  '28 AWG',
  '30 AWG',
  '32 AWG',
  '34 AWG',
  '36 AWG'
]
